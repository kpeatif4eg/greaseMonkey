const User = require('../../models/User');
const Task = require('../../models/Task');
const moment  = require('moment');

module.exports = async (req,res) =>{
    try{
        const tasksByMonth = await Tasks.find({owner: req.user.userId});
        tasksByMonth.sort(( a,b => a.date - b.date ));
        console.log(tasksByMonth)
    }
    catch(e){
        console.log(e)
    }
} 