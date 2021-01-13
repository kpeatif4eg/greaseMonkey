const Task = require('../../models/Task');

module.exports = async (req, res) => {
    try {

        const newTask = new Task({
            tasks: req.body,
            owner: req.user.userId
        });
        await newTask.save();
        res.status(201).json({ message: 'Запись сохранена' })
    }
    catch (e) {
        console.log('createTaskError', e)
        return res.status(404).json({ message: 'Неверные данные' })
    }
}