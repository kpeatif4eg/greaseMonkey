const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const tasks = require('./tasksForList');
const path = require('path');
const app = express();

const PORT = config.get('port');
const mongoUri = config.get('mongoUri')

app.use(express.json({extended: true}));



app.use('/api/auth', require('./routes/auth/auth.routes'));
app.use('/api/task', require('./routes/task/task.routes'));
app.use('/auto', require('./routes/automobile/auto.routes'));
app.use('/api/user', require('./routes/user/user.routes'));

app.get('/getList',(req, res)=>{
    res.status(200).json(tasks);
});
if(process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));
    
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    })
}

const begin = async () => {
    try{
        await mongoose.connect(mongoUri,{
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        mongoose.set('useFindAndModify', false);
        
        console.log('DB is connected');
        app.listen(PORT, ()=>{  
            console.log(`Server has been started at ${PORT} port`)
        })
        
    } catch(e) {
        console.log('SOMETHINGWROOOONG', e)
        process.exit(1)
    }
}

begin();