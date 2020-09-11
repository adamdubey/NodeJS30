//name of the file : delete-all.js
mongo.connect(new_db, (error, db) => {
  if (error) {
    throw error;
  }

  //Search query for deletion
  var query = { age: "above 22" };

  //Accessing the collection
  db.collection("details").deleteMany(query, (err, collection) => {
    if (err) throw err;
    console.log(collection.result.n + " Record(s) deleted successfully");
    console.log(collection);
    db.close();
  });
});
