const { Schema, model } = require('mongoose')

var FoodSchema = Schema({
    name: {
        type: "String",
        required: true
    }
})

module.exports = model("Food", FoodSchema)