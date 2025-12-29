const mongoose = require ('mongoose')




const TrackSchema = mongoose.Schema({
    tittle: {
        type: String,
        required:true
    },

    artist:{
        type: String,
        required:true
    }
})


const Track = mongoose.model('Track', TrackSchema)

module.exports = Track;