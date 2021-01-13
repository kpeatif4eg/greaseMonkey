module.exports = async (req, res) => {
    try {
        const tasksByMonth = await Tasks.find({ owner: req.user.userId });
        tasksByMonth.sort((a, b => a.date - b.date));
    }
    catch (e) {
        console.log(e)
    }
} 