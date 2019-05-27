const MongoClient = require('mongodb').MongoClient;
ObjectID = require("mongodb").ObjectID;
const DB_NAME = "bank";
const HOST = "mongodb://localhost:27017";

class MongoHelper {
  static create(coll, payload) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.insertOne(payload);
    });
  }
  static get(coll) {
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.find().toArray();
    })
  }

  static delete(coll, id) {
    console.log(coll);
    console.log(id);
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      collection.deleteOne({ _id: ObjectID(id) });
    });
  }

  static update(coll, id, payload) {

    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      console.log(payload);
      return collection.updateOne({ _id: ObjectID(id) }, { $set: payload });
    });
  }
}

module.exports = MongoHelper;
