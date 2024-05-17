const prisma = require("../config/prisma")

class ScoreController {
    async index(req, res) {
        try {
        const scores = await prisma.score.findMany()
        return res.status(200).json(scores)
        } catch (e) {
        return res.status(500).json({ message: e.message })
        }
    }

    async store(req, res) {
        const body = req.body

        try {
            const score = await prisma.score.create({
                data: {
                    name: body.name,
                    score: body.score,
                    time: body.time
                },
            })
            
            return res.status(201).json(score)
        } catch (e) {
            return res.status(500).json({ message: e.message })
        }
    }

    async show(req, res) {
        try {
        const id = req.params.id
        const score = await prisma.score.findUnique({
            where: {
            id: Number(id),
            },
        })

        if (!score) return res.status(404).json({ message: "score not found" })

        return res.status(200).json(score)
        } catch (e) {
        return res.status(500).json({ message: e.message })
        }
    }
}

module.exports = new ScoreController()