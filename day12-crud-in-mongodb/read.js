//name of the file : read-one.js
mongo.connect(new_db, function (error, db) {
  if (error) {
    throw error;
  }
  //findOne() reads the first occurance of any data from the database.
  db.collection("details").findOne({}, (err, collection) => {
    if (err) throw err;
    console.log("Record Read successfully");
    console.log(collection);
    db.close();
  });
});
