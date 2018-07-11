// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'andrew', age: 25};
// var {name} = user; //ES6 destructuring
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //     text: 'Something to do',
  //     completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to unsert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Kelly',
  //   age: 23,
  //   location: 'Manila'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  db.close();
});
