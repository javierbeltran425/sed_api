const Food = require('../models/FoodModel')

var FoodController = {
    register: async(req, res) => {
        try {

            let newFood = new Food({
                name: req.body.name,
            })

            await newFood.save()

            return res.status(201).json({ error: false, message: "Created" })
        }
        catch(err) {
            console.log(err)
            return res.status(400).json(err.details != null ? err.details[0].message : err)
        }

    },

    update: async(req, res) => {
        try {
            await Food.findByIdAndUpdate(req.params.id, 
                {
                    name: req.body.name
                }    
            )

            return res.status(200).json({error: false, message: "Comida actualizada."})
        } catch (error) {
            return res.status(400).json(err.details != null ? err.details[0].message : err)
        }
    },

    getFood: async(req, res) => {
        try {
            const food = await Food.find()

            return res.status(200).json({
                data:food
            })
        } catch (error) {
            return res.status(500).json({error: true, message: "Ocurrió un problema"})
        }
    },

    deleteFood: async(req, res) => {
        try {
            await Food.findByIdAndRemove(req.params.id)

            return res.status(200).json({ error: false, message: "Removed" })
        } catch (error) {
            return res.status(400).json(err.details != null ? err.details[0].message : err)
        }
    }
}

module.exports = FoodController