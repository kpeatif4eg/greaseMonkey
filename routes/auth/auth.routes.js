const { Router } = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const transporter = require('../../models/mailer/mailer')
const User = require('../../models/User')
const config = require('config')

const router = Router();

// api/auth...
router.post('/register',
    [
        check('email', 'Неверный эмейл').isEmail(),
        check('password', 'Мин. длина пароля 6 знаков').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Неверные данные', errors })
            }

            const { email, password, workplaceName, paymentDay, percentLevel, paymentRange } = req.body;

            const candidate = await User.findOne({ email });

            if (candidate) {
                return res.status(400).json({ message: 'Этот эмейл уже используется', user: candidate })
            }

            const hashedPassword = await bcrypt.hash(password, config.get('salt'));
            const newUser = new User({ email, password: hashedPassword, workplaceName, paymentDay, percentLevel, paymentRange });

            await newUser.save();

            res.status(201).json({ message: 'Пользователь успешно создан' })

        } catch (e) {
            console.log(e.message)

            res.status(500).json({ message: 'Something wrong on route api/auth/register', error: e.message })
        }
    })


// api/auth...
router.post('/login',
    [
        check('email', 'Input correct email').isEmail(),
        check('password', 'Input password').exists()
    ],
    async (req, res) => {
        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: 'Введены неверные данные',
                    errors: errors.array()
                })
            }

            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' })
            }

            const matchPass = await bcrypt.compare(password, user.password);


            if (!matchPass) {
                return res.status(400).json({ message: 'Пароль не совпадает' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('secretJWTKey'),
                { expiresIn: config.get('tokerExpired') }
            )

            res.status(200).json({ token: token, userId: user.id })

        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Something wrong on route api/auth/login', error: e })
        }
    });


///restorePass

router.post('/forgetPass', async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({email});
        
        if(!user){
            return res.status(400).json({message: 'Пользователь не найден'})
        }

        const token = jwt.sign(
            { email },
            config.get('secretJWTKey'),
            { expiresIn: `${config.get('restoreLinkExpr')}h` }
        );

        var mailOptions = {
            from: `grmonkey.site <${config.get('projMail')}>`,
            to: `${email}`,
            subject: 'Восстановление пароля',
            html: `${config.get(
                process.env.NODE_ENV === 'production' ? 'restorePathProd' : 'restorePathDev'
            )}/${token}  ссылка доступна в течении ${config.get('restoreLinkExpr')} часа`,
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
                res.status(400).json({ message: 'Не удалось отправить ' })
            } else {

                console.log('Email sent: ' + info.response);
                res.status(200).json({ message: 'Письмо отправлено, проверьте почту ' })
            }
        })
    }
    catch (e) {
        console.log(e)
    }
})
router.post('/restorePass',
    [check('password', 'Input password').exists()],
    async (req, res) => {
    try{

        const token = req.body.data.token;
        const newPassword = req.body.data.pass;
        const parsedToken = await jwt.verify(token, config.get('secretJWTKey'));
        
        const cryptedPass = await bcrypt.hash(newPassword, config.get('salt'));
        console.log(parsedToken)

        await User.findOneAndUpdate(
            { email: parsedToken.email },
            { $set: { password: cryptedPass } },
            {strict: false}
        );

        return res.status(200).json({message: 'Пароль успешно изменен'})
        }
        catch(e){
            if(e.message === 'jwt expired'){
                res.status(404).json({message: 'Ссылка устарела, проведите процедуру заново'})
            }
        }
    })


module.exports = router;