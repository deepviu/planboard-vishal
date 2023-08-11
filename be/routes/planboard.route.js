const express = require('express');
const sql = require('../services/planboard.services')

// const { getPlan } = require ('../services/planboard.services');
// const { getPlan, createPlan } = require ('../controller/planboard.controller');



const router = express.Router();
// router.get('/plan', getPlan);
// router.post('/createPlan', createPlan);

router.get('/plan', function (req, res) {
    sql.getPlan().then((result)=>{
        res.json(result[0]);
    })
})

module.exports = router;