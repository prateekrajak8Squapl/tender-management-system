const express = require('express');

const router = express.Router();
 
const defaultRoutes =[

]

defaultRoutes.forEach(r=>{
    router.use(r.path,r.route)
})
module.exports =router;
