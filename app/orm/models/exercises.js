const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let exercise = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    weight: {
        type: Number,
        trim: true
    },
    sets: {
        type: Number,
        trim: true
    },
    reps: {
        type: Number,
        trim: true
    },
    duration: {
        type: String,
        trim: true
    },
})

const Exercise = mongoose.model('Exercise', exercise)

module.exports = Exercise