const express = require("express")

const ScoreController = require("../controllers/ScoreController")

const router = express.Router()

router.get("/scores", ScoreController.index)
router.post("/scores", ScoreController.store)
router.get("/scores/:id", ScoreController.show)

module.exports = router