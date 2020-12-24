const {Router} = require('express');
const Auto  = require('../../models/Auto');
// const authMdlw = require('../middleware/auth.middleware');
const db = require('../../autoDB.json');


const router = Router();

router.get('/createAuto', (req,res)=>{
    // try{
    //     async function writeDb (count=0) {
    //         const item = db[count];
    //         const newAuto = new Auto({
    //             mark: item.mark,
    //             model: item.model,
    //             devFrom: item.devFrom,
    //             devTo: item.devTo
    //         })
            
    //         await newAuto.save();
            
    //         console.log(count)
    //         console.log(db[count])
    //         count += 1;
    //         setTimeout(()=>writeDb(count),1000);
    //     }
    //     writeDb();

    // } catch(e){console.log}
});


router.get('/autoMarks', async (req,res)=>{
    try{
        const autos = await Auto.find({});
        const takeMark = new Set(autos.map(item=>item.mark))

        return res.status(200).json({message: [...takeMark]})
    } catch(e){}
});

router.post('/autoModels', async(req,res)=>{
    try{

        const body = req.body.mark;
        const takeModel = await Auto.find({mark: body})
        return res.status(200).json({message:takeModel})

    } catch(e){console.log('EEEEEEEEEEEEEEEEEEEEEEE',e)}
})

module.exports = router;