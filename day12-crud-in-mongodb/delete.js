//name of the file : delete-one.js
mongo.connect(new_db, (error, db) => {
  if (error) {
    throw error;
  }
  //query stores the search condition
  var query = { age: "above 22" };

  //Accessing a COLLECTION IN MONGODB USING NODE.JS
  db.collection("details").deleteOne(query, (err, collection) => {
    if (err) throw err;
    console.log(collection.result.n + " Record(s) deleted successfully");
    console.log(collection);
    db.close();
  });
});
