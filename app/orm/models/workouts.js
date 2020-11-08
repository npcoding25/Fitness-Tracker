const mongoose = require('mongoose')
const Schema = mongoose.Schema

let workout = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
})

const Workout = mongoose.model("Workout", workout)

module.exports = Workout