export const dateHelper = (date) =>{

        const dateParser = date => {
            if (!date) return; 
           return date.split('-', 2)[1]
       };
       
       const cleanNumber = numb =>{
        if(numb[0] === 0 || numb[0] === '0'){
                const arr = Array.from(numb);
               return +(arr.slice(1,2).join());

           }
       }
       const monthCaller = date => {
        if (!date) return; 
           const months = [
               'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', ];
                
               return months[ cleanNumber(dateParser(date)) - 1 ]
       }
       
       return monthCaller(date); 

}
