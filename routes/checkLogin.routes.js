const { Router } = require('express')
const authMdlw = require('../middleware/auth.middleware')
const router = Router();

router.get('/checkAuth', authMdlw, async (req, res)=>{
   try{
       
        res.status(200).json({message:'Авторизация активна'});
   } 
   catch(e){
       console.log(e, 'error')
   }
});

module.exports = router;