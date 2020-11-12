const db = require('../models')


module.exports = function(app) {

    app.get('/api/workouts', async function(req, res) {

        const result = await db.Workout.find({})
        console.log("Initial get request ***************************************",
        result)

        res.send(result)
    })

    app.put('/api/workouts/:id', async function(req, res) {

        const result = await db.Workout.findOneAndUpdate({_id: req.params.id}, { $push: {exercises: req.body} }, { new: true})

        console.log("Adding exercise to workout ************************************",
        result)

        res.send(result)
        
    })

    app.post('/api/workouts', async function(req, res) {
        console.log(`posting route`, req.body)
        const createWorkout = await db.Workout.create({})
        
        res.send(createWorkout)
    })

    app.get('/api/workouts/range', async function(req, res) {
        const result = await db.Workout.find({})
        console.log("Finding workout data ***********************************",
        result)
        res.send(result)
    })
}