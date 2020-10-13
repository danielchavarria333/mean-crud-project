/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://daniel-ch-3:ElDanielChavarria333@cluster-mean-crud.3drth.mongodb.net/empleadosDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
});

module.exports = client;
*/
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://daniel-ch-3:ElDanielChavarria333@cluster-mean-crud.3drth.mongodb.net/empleadosDB?retryWrites=true&w=majority')
    .then(db => console.log('db connected'))
    .catch(err => console.error(err))

module.exports = mongoose;