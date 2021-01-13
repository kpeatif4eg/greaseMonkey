const {Router} = require('express');
const Auto  = require('../../models/Auto');
const db = require('../../autoDB.json');


const router = Router();

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