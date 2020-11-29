const {Router} = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const authMdlw = require('../middleware/auth.middleware');
const config = require('config');


const router = Router();

router.post('/getUserInfo', authMdlw ,async(req, res)=>{
    try{

        const userInfo = await User.findById(req.user.userId);
        
        return res.status(200).json({user:userInfo})

    } catch(e) {
        console.log(e)
    }
});

router.put('/updateUserInfo', authMdlw, async (req,res)=>{
    try{
        const {data} = req.body;
        
        if(!data.email){
            delete data.email;
        } else {
            const candidate = await User.findOne({email: data.email});

            if(candidate && candidate.email !== data.email){
                console.log(candidate, 'candidate')
                return res.status(400).json({message: 'Емейл уже спользуется'})
            }
        }
       

        let user = await User.findOne({_id: req.user.userId});
        console.log(data, 'user')

        if(data.passWord && bcrypt.compare(data.passWord, user.password)){
            if(data.pass1===data.pass2){
                data.password = await bcrypt.hash(data.pass2, config.get('salt'));

            }
        }
        delete data.pass1; 
        delete data.pass2;
        delete data.passWord;

        console.log(data)
        // user = {...user, ...data,};
        await user.updateOne({...data});


        return res.status(200).json({message: 'Данные успешно изменены'})
        // await User.findOneAndUpdate({ _id: req.user.userId },{...data}, {new: true});



    } catch(e){
        console.log(e, 'errorUpdateUser')
    }
})

module.exports = router;