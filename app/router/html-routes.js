var path = require("path")

// Exporting which html page will be shown based on the route received
module.exports = function(app) {

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../../public/index.html"))
    })

    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../../public/stats.html"))
    })

    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../../public/exercise.html"))
    })

}