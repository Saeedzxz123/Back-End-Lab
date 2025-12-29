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


router.get('/', async (req,res)=>{
    try{
    const tracks = await Track.find({})
    res.status(200).json({tracks})
    }
    catch(err){
    console.log(err)
    res.status(500).json({err: 'failed to get the tracks'})
    }
})




router.get('/:id', async (req,res)=>{
    try{
        const {id} = req.params
    const track = await Track.findById(id)
    
    if(!track){res.status(404).json({error: 'No track found'})}

    else{res.status(200).json({track})}
    }
    catch(err){
    console.log(err)
    res.status(500).json({err: 'failed to get track'})
    }
})


router.delete('/:id', async (req,res)=>{
    try{  const {id} = req.params
    const track = await Track.findByIdAndDelete(id)
    if(!track){
        res.status(404).json({error: 'track not found'})
    }
    else{
        res.status(200).json({track})
    }
}
catch(err){
        console.log(err)
  res.status(500).json({error: 'track cant be deleted'})}
})



module.exports = router