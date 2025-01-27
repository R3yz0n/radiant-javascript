// Expensive time consuming tasks
function getDataFromDatabase() {
  console.log("this is the data from database");
  //   console.log(callback);
}

//secdona ma hera
function processData(data) {
  console.log("Processing the data: " + data);
}
processData("random data");
// Calling the function with the callback
getDataFromDatabase(); //yeta bata suru
