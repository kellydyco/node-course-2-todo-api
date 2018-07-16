const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) - delete multiple records, you can't pass in an empty document

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// you get the doc back
Todo.findOneAndRemove({_id: '5b4c667dbe320ec92623cf0a'}).then((todo) => {

});

Todo.findByIdAndRemove('5b4c667dbe320ec92623cf0a').then((todo) => {
  console.log(todo);
});
