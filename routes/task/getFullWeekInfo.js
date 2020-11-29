
const Task = require('../../models/Task');
const User = require('../../models/User');
const moment = require('moment');


module.exports = async ( req,res )=>{
    moment.locale('ru');

    const first = req.body.data.firstDay;
    const last = req.body.data.lastDay;

    const tasks = await Task.find({ owner:req.user.userId, date: {$gte: new Date(first), $lte: new Date(last)} });
    const user = await User.findById(req.user.userId);
    
    if(!tasks.length){
        return res.status(200).json({message: 'Ты на этой неделе не работал :('});
    }

    tasks.sort((a,b)=>b.tasks.data.totalCost - a.tasks.data.totalCost );
    const test = tasks.map(item=>{
        return item.tasks.data.totalCost
    })
    const carList = tasks.map(item=>{
        return {
            car: item.tasks.data.mark + ' ' + item.tasks.data.model,
            date: moment(item.date).format('DD,MMMM'),
            cost: item.tasks.data.totalCost,
        }
    })
    const sumCostByWeek = tasks.reduce((a, item)=> { return a += item.tasks.data.totalCost},0);

    const info = {
        carsCount: tasks.length,
        mostProfitCarCost: tasks[0].tasks.data.totalCost,
        mostProfitCarName: `${tasks[0].tasks.data.mark} ${tasks[0].tasks.data.model}`,
        mostProfitCarTasks: tasks[0].tasks.data.tasks,
        mostProfitCarWithPercent: (user.percentLevel / 100) * tasks[0].tasks.data.totalCost,
        sumCostByWeek,
        withUserPercent: Math.floor((user.percentLevel / 100) * sumCostByWeek),
        userPercent: user.percentLevel,
        carList,
        test
    }
    return res.status(200).json({info});
}