const Task = require('../../models/Task');


module.exports = async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(404).json({ message: 'id отсутствует' })
        }
        const task = await Task.deleteOne({ _id: req.body.id });
        if (!task.deletedCount) {
            return res.status(404).json({ message: 'Ошибка записи не существует' });
        }
        return res.status(200).json({ message: 'Запись успешно удалена' });
    }
    catch (e) {
        console.log('delTaskError')
    }
}