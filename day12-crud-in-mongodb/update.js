//name of the file : update-one.js
mongo.connect(new_db, (error, db) => {
  if (error) {
    throw error;
  }
  //Query parameter is used to search the collection.
  var query = { name: "rishabhio" };
  //And When the query matches the data in the DB , "data" parameter is used to update the value.
  var data = { name: "nodejsera.com", mobile: "1234567890" };
  //Accessing the collection using nodejs
  db.collection("details").updateOne(query, data, (err, collection) => {
    if (err) throw err;
    console.log("Record updated successfully");
    console.log(collection);
  });
});
