const db = require('../models')

// Exporting api routes
module.exports = function(app) {

    // For showing last workout on index.html page
    app.get('/api/workouts', async function(req, res) {

        // Getting workout from database
        const result = await db.Workout.find({})

        // Sending back data
        res.send(result)
    })
    
    // For creating a workout on exercise.html page
    app.post('/api/workouts', async function(req, res) {

        // Creating workout in database
        const createWorkout = await db.Workout.create({})
        
        // Sending back data
        res.send(createWorkout)
    })

    // For adding exercises to workout in exercise.html page
    app.put('/api/workouts/:id', async function(req, res) {

        // Getting workout and adding exercise data to it
        const result = await db.Workout.findOneAndUpdate({_id: req.params.id}, { $push: {exercises: req.body} }, { new: true})

        // Sending back data
        res.send(result)
    })


    // For showing graphs and stats on stats.html page
    app.get('/api/workouts/range', async function(req, res) {

        // Getting workout from database
        const result = await db.Workout.find({})

        // Sending back data
        res.send(result)
    })
}