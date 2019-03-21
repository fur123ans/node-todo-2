// const MongoClient=require('mongodb').MongoClient;
 const {MongoClient, ObjectID}=require('mongodb');
var obj=new ObjectID();
console.log(obj);
 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
     return console.log('unable to connect');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err,res) => {
  //  if(err){
  //    return console.log('unable to insert todo',err);
  //  }
  //  console.log(JSON.stringify(res.ops,undefined,2));
  // });

// db.collection('Users').insertOne({
// name: 'Furquan',
// agr: 23,
// location: 'ALigarh'
// }, (err,res) => {
//  if(err){
//    console.log('unable to insert ',err);
//  }
//  console.log(res.ops[0]._id.getTimestamp());
// });

  db.close();
 });