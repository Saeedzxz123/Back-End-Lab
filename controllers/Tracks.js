const express = require('express')
const router = express.Router()



const Track = require('../models/tracks')

/* ---------------------------- */

router.post('/', async (req,res)=> {
    try{
        const track = await Track.create(req.body)
        res.status(201).json({track})

    }
    catch(err){
        console.log(err)
        res.status(500).json({err: 'failed to create Track'})
    }
})


module.exports = router