const Task = require('../../models/Task');



module.exports = async (req, res) => {
    try {

        const task = await Task.findOne({ _id: req.body.data })

        return res.status(200).json({ ...task._doc })
    } catch (e) {
        console.log('taskByIdError')
    }
}