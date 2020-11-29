const groupTasksByDateInArray = (tasks) =>{
    const task = tasks && tasks.reduce((ac, cv, i, cArr)=>{
        const date = String(cv.date).slice(0,15);
        const nextCv = cArr[i+1];
        const nextDate = nextCv && String(cArr[i+1].date).slice(0,15);
        if(!i){
            ac.collectDate = []
            ac.prevDate = date;
            ac.currDate = date;
            ac.payload = [];
            
            ac.collectDate.push({date: cv.date, tasks: cv})
            if(date !== nextDate){
                ac.payload.push(ac.collectDate)
            }
            return ac;
        } else {
            ac.currDate = date;
        }

        if( date !== nextDate && ac.prevDate !== date ){
            ac.collectDate = [];
            ac.collectDate.push({date: cv.date, tasks: cv});
            ac.payload.push(ac.collectDate);
            return ac

        } else if( date !== nextDate){
                if(!nextDate){
                    ac.collectDate.push({date: cv.date, tasks: cv});
                    ac.payload.push(ac.collectDate);

                    return ac;
                }
                    ac.collectDate.push({date: cv.date, tasks: cv})
                    ac.payload.push(ac.collectDate);
                    return ac;

                } else if(( date === nextDate || !nextDate ) && ac.prevDate !== date){
                            ac.collectDate = [];
                            ac.collectDate.push({date: cv.date, tasks: cv});
                            ac.prevDate = date;
                            return ac;

                        } else if( !nextDate && ac.prevDate === date  ){
                                    ac.collectDate.push({date: cv.date, tasks: cv});
                                    ac.payload.push(ac.collectDate);
                                    return ac;

                                } else if( ac.prevDate === date  ){
                                            ac.collectDate.push({date: cv.date, tasks: cv});
                                            return ac;

                                        }
        ac.prevDate = date;
        return ac;
    },{})
    return task;
}

module.exports = groupTasksByDateInArray;