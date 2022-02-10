const mongoose = require('mongoose')
const {Schema} = mongoose;

//Create a 'Person' Model

const personSchema = new Schema({
    name : {type: String, required : Boolean},
    age : Number,
    favoriteFoods : [String]
})

const Person = mongoose.model("person", personSchema );
module.exports = Person