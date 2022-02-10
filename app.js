const express = require('express');
const mongoose = require('mongoose');
const Person = require('./models/Person');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 6000;
const MONGO_URI = process.env.MONGO_URI;
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

//mongoose set up

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('mongoDB connected...');
  })
  .catch((err) => console.log(err));

// Create and Save a Record of a Model:

// const ada = new Person({
//     name: 'Ada',
//     age: 22,
//     favoriteFoods: ['hamburger', 'cheese cake']
// })
// ada.save()
//     .then(doc => {
//         console.log(doc)
//     }).catch(err => { console.log(err) })

// Create Many Records with Module.create() method

// Person.create([{
//     name: 'Amelia',
//     age: 22,
//     favoriteFoods: ['chicken wings', 'milkshake']
// }, {
//     name: 'Inna',
//     age: 26,
//     favoriteFoods: ['burritos']
// }, {
//     name: 'Delia',
//     age: 24,
//     favoriteFoods: ['burritos']
// }], (err, people) => {
//     if (err) throw err
//      console.log(people)
// })

//Use model.find() to Search my Database

// Person.find({ name: 'Delia' }, (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//Use model.findOne() to Return a Single Matching Document from Your Database

// Person.findOne({ favoriteFoods:"burritos" }, (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     });

//Use model.findById() to Search Your Database By _id
// const personId = "6204d183bb7796b5a15fef98"
//     Person.findById(personId, (err, data) => {
//         if (err) throw err;
//          console.log(data)
//     });

//Perform Classic Updates by Running Find, Edit, then Save
// const foodToAdd = 'hamburger';

// .findById() method to find a person by _id with the parameter personId as search key.
//  const otherId = "6204d183bb7796b5a15fef98"
// Person.findById(otherId, (err, person) => {
//     if (err) throw err;

// Array.push() method to add "hamburger" to the list of the person's favoriteFoods
// person.favoriteFoods.push(foodToAdd);

// and inside the find callback - save() the updated Person.
//     person.save((err, updatedPerson) => {
//         if (err) throw (err);
//         console.log(updatedPerson)
//     })
// })

//Perform New Updates on a Document Using model.findOneAndUpdate()

// const id ="6204d1b1e6e26c060fcece47"
// Person.findByIdAndUpdate({_id:id},{age : 20} ,{ new: true }, (err, updatedDoc) => {
//     if (err) throw err;
//     console.log(updatedDoc);
// })

//Delete One Document Using model.findByIdAndRemove

// let id =  "6204d1b1e6e26c060fcece47"
// Person.findByIdAndRemove(id
//    ,
//     (err, removedDoc) => {
//         if (err) throw err;
//         console.log(removedDoc);
//     }
// );

//MongoDB and Mongoose - Delete Many Documents with model.remove()

// const nameToRemove = "Inna";
// Person.remove({ name: nameToRemove }, (err, response) => {
//     if (err) throw err;
//     console.log(response);
// })

//Chain Search Query Helpers to Narrow Search Results

// Person.find({ favoriteFoods: 'burritos' })
//   .sort({ name: 1 })
//   .limit(2)
//   .select(['name', 'favoriteFoods'])
//   .exec((err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
