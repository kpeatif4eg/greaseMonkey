const Task = require('../../models/Task');


module.exports = async (req, res) => {
    try {
        console.log(req.body.data)
        const updatedTask = await Task.findOneAndUpdate({ _id: req.body.data.id }, { $set: { tasks: { data: req.body.data.task } } }, { strict: false, new: true });
        // await updatedTask.save()
        return res.status(200).json({ message: 'Изменения сохранены', data: updatedTask });
    } catch (e) {
        console.log(e)
    }
}