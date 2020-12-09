const {Router} = require('express');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const   jwt = require('jsonwebtoken');
const User = require('../models/User')
const config = require('config')

const router = Router();

// api/auth...
router.post('/register',
    [
        check('email', 'Неверный эмейл').isEmail(),
        check('password', 'Мин. длина пароля 6 знаков').isLength({min: 6})
    ],
    async (req, res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ message:'Неверные данные', errors })
        }

        const {email, password ,workplaceName, paymentDay, percentLevel, paymentRange} = req.body;

        const candidate = await User.findOne({ email });

        if(candidate){
            return res.status(400).json({ message: 'Этот эмейл уже используется',user: candidate })
        }

        const hashedPassword = await bcrypt.hash(password, config.get('salt'));
        const newUser = new User({ email, password:hashedPassword, workplaceName, paymentDay, percentLevel ,paymentRange});

        await newUser.save();

        res.status(201).json({ message: 'Пользователь успешно создан' })

    } catch(e){
        console.log(e.message)

        res.status(500).json({ message: 'Something wrong on route api/auth/register', error: e.message  })
    }
})


// api/auth...
router.post('/login',
    [
        check('email', 'Input correct email').isEmail(),
        check('password', 'Input password').exists()
    ],
    async (req, res)=>{
    try{
        
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                message:'Incorrect registration data',
                errors: errors.array() 
            })
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({ message: 'Пользователь не найден' })
        }

        const matchPass = await bcrypt.compare(password, user.password);

        if(!matchPass){
            return res.status(400).json({message: 'Пароль не совпадает'})
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('secretJWTKey'),
            {expiresIn: config.get('tokerExpired')}
        )

        res.status(200).json({token: token, userId: user.id})
        
    } catch(e){
        console.log(e)
        res.status(500).json({ message: 'Something wrong on route api/auth/login', error: e })
    }
})

module.exports = router;