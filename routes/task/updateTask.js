const Task = require('../../models/Task');


module.exports = async (req, res) => {
    try {
        
        const updatedTask = await Task.findOneAndUpdate(
            { _id: req.body.data.id },
            { $set: { tasks: { data: req.body.data.task }, date:req.body.data.date } },
            { strict: false, new: true }
        );

        // await updatedTask.save()
        return res.status(200).json({ message: 'Изменения сохранены', data: updatedTask });
    } catch (e) {
        console.log(e)
    }
}