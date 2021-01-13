const { Router } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const authMdlw = require('../../middleware/auth.middleware');
const config = require('config');


const router = Router();

router.post('/getUserInfo', authMdlw, async (req, res) => {
    try {

        const userInfo = await User.findById(req.user.userId);

        return res.status(200).json({ user: userInfo })

    } catch (e) {
        console.log(e)
    }
});



router.put('/updateUserInfo', authMdlw, async (req, res) => {
    try {
        const { data } = req.body;
        let user = await User.findOne({ _id: req.user.userId });


        if (!data.email) {
            delete data.email;
        } else {
            const candidate = await User.findOne({ email: data.email });
            if (candidate && (candidate.email !== user.email)) {
                if (candidate.email === data.email) {
                    return res.status(400).json({ message: 'Емейл уже спользуется' })
                }
            }

        }

        if (data.isEditPass) {




            if ((!!data.pass1 && !!data.pass2) && data.pass1 === data.pass2) {
                if (!data.passWord) {
                    return res.status(400).json({ message: 'Неверный пароль' });
                }

                const isDiff = await bcrypt.compare(data.passWord, user.password);

                if (data.passWord && isDiff) {
                    //data.password соответствует свойству password в БД
                    data.password = await bcrypt.hash(data.pass2, config.get('salt'));

                } else {
                    res.status(400).json({ message: 'Неверный пароль' })
                }
            } else {
                res.status(400).json({ message: 'Пароли не совпадают' })
            }
        }
        delete data.pass1;
        delete data.pass2;
        delete data.passWord;

        await user.updateOne({ ...data });


        return res.status(200).json({ message: 'Данные успешно изменены' })



    } catch (e) {
        console.log(e, 'errorUpdateUser')
    }
})

module.exports = router;