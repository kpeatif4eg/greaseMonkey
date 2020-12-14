const Task = require('../../models/Task');
const User = require('../../models/User');
const moment = require('moment');
const compareDay = require('../helpers/compareDayNameWithNumber')
const parseTasksByDate = require('../helpers/tasksHelpers');



module.exports = async (req, res) => {
    const formatTmplt = 'YYYY-MM-DD';
    try {
        let tasks = '';
        tasks = await Task.find({ owner: req.user.userId }).sort(({ date: -1 }));
        if(!tasks.length){
            return res.status(404).json({message: 'Работ пока нет'})

        }
        if (req.body.data && req.body.data === 'day') {
            //  tasks = await Task.find({date: cv.date: {$gte: new Date('2020-09-15'), $lte: new Date('2020-09-16')} });
            const parsedTasks = await parseTasksByDate(tasks);

            return res.status(200).json({
                payload: parsedTasks.payload,
                type: 'day',
            });
        }


        if (req.body.data && req.body.data === 'week') {
            moment.locale('ru')
            tasks = await Task.find({ owner: req.user.userId }).sort(({ date: 1 }));

            if(!tasks.length){
                return res.status(404).json({
                    message: 'Работ пока нет',
                    type: 'week',
                })
            }

            const user = await User.findOne({_id: req.user.userId});

            const firstWeekDayFlag = user.paymentRange;

            const daysByWeek = [];

            let firstTimeDate = moment(tasks[0].date).format(formatTmplt);
            let lastTimeDate = moment(tasks[tasks.length - 1].date).format(formatTmplt);
            
            if(!firstWeekDayFlag){
                if (moment(lastTimeDate).format('dd') !== 'вс') {
                    lastTimeDate = moment(lastTimeDate).endOf('week');
                }
                if (moment(firstTimeDate).format('dd') !== 'пн') {
                    firstTimeDate = moment(firstTimeDate).startOf('week')
                }
            } else {
                if(firstWeekDayFlag){
                    const dayIndex = compareDay(firstWeekDayFlag);

                    console.log(firstTimeDate)
                    console.log(dayIndex)

                    firstTimeDate = (
                        //если первый день помечен как "с работами"
                        //**firstTimeDate
                        // и он оказывается раньше
                        // приведенного к графику выплат дня 
                        //**moment(firstTimeDate).startOf('week').add(dayIndex.start, 'days'))
                        //то откатываем одну неделю назад
                        moment(moment(firstTimeDate).startOf('week').add(dayIndex.start, 'days')).isAfter(firstTimeDate)
                        ?
                        moment(firstTimeDate).startOf('week').subtract(1, 'week').add(dayIndex.start, 'days')
                        :
                        moment(firstTimeDate).startOf('week').add(dayIndex.start, 'days')


                    );

                    if(moment().isAfter(lastTimeDate)){
                        lastTimeDate = moment();
                    }
                    lastTimeDate = moment(lastTimeDate).endOf('week').add(dayIndex.end, 'days');
                }
            } 



            const dateDifference = moment(lastTimeDate).diff(firstTimeDate, 'days');
            for (let i = dateDifference; i >= 0; i--) {
                daysByWeek.push(moment(lastTimeDate).subtract(i, 'day').format(formatTmplt))
            }



            const markedDaysByWeek = daysByWeek.map((item, i) => {
               const filtered = tasks.filter(fItem => moment(fItem.date).format(formatTmplt) === item);

                return { date: item, haveBeenTasks: filtered.length ? filtered : !(!!filtered )}
            })


            const slicedBySevenDay = markedDaysByWeek.reduce((acc, item, i, cArr) => {
                
                
                let innerArr = [];
                if (acc.week && acc.week.length) {
                    innerArr = acc.week[acc.week.length - 1];

                    if (!(i % 7)) {
                        acc.week.push([item && item]);
                        acc.sumCost = 0;
                        return acc;
                    }
                } else {
                    innerArr.push(item);
                    acc.week = [];
                    acc.week.push(innerArr);

                    if(item.haveBeenTasks){
                        // если в текущем елементе есть выполненные работы суммируем их стоимость
                           acc.sumCost =  acc.sumCost ? acc.sumCost : 0;
                           const sumTask =  item.haveBeenTasks.reduce((acc2, item2, i) => {
                               return acc2 += +item2.tasks.data.totalCost;
                                
                            },0)
                            acc.sumCost += sumTask;
                        }

                    return acc;
                }

                innerArr.push(item);
                return acc;
            }, {})
            
            return res.status(200).json(
                {
                    payload: slicedBySevenDay.week,
                    type: 'week',
                    // test: slicedBySevenDay
                }
            );
        }

        tasks = await Task.find({ owner: req.user.userId });
        return res.status(200).json(tasks);
    }
    catch (e) {
        console.log('errorInGettingDataByWeek', e);
        res.status(500).json({ message: 'Что-то нетак' });
    }
}