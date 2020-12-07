const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const tasks = require('./tasksForList');

const app = express();

const PORT = config.get('port');
const mongoUri = config.get('mongoUri')

app.use(express.json({extended: true}));



app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/task', require('./routes/task/task.routes'));
app.use('/api',require('./routes/checkLogin.routes'));
app.use('/auto',require('./routes/auto.routes'));
app.use('/api/user', require('./routes/user.routes'));

app.get('/getList',(req, res)=>{
    res.status(200).json(tasks);
});

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