// const maxCount = 10;
// const timeOut = 500;

// export const  recurseRequest = ({dispFunc, apiReq, action, errReq, startReq, endReq}, reqCount = 0) => {

//     dispFunc(startReq());

//     apiReq()
//     .then( res=>{
//         dispFunc( action(res.data) );
//         dispFunc( endReq() );
//     })
//     .catch(err=>{
//         if(reqCount <= maxCount){
//             setTimeout(() => {
//                 recurseRequest(reqCount+=1)
//             }, timeOut);
//         } else {
//             dispFunc( errReq() );
//             dispFunc( endReq() );

//         }
        
//     });
    
// }


export const recurseRequest = (asyncFunc) =>{
    return asyncFunc
}