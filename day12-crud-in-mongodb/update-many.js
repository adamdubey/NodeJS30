//name of the file : update-all.js
mongo.connect(new_db, (error, db) => {
  if (error) {
    throw error;
  }

  //query store the search condition
  var query = { age: { $gt: "22" } };
  //data stores the updated value
  var data = { $set: { age: "above 22" } };
  //CREATING A COLLECTION IN MONGODB USING NODE.JS
  db.collection("details").updateMany(query, data, (err, collection) => {
    if (err) throw err;
    console.log(
      collection.result.nModified + " Record(s) updated successfully"
    ); //It will console the number of rows updated
    console.log(collection);
    db.close();
  });
});
