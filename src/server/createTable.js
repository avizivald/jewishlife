function createTable(query){
  
  return new Promise((resolve, reject) => {
    console.log("query  ===>>>> ",query);
      connection.query(query, (error, results, fields)=> {
  // error will be an Error if one occurred during the query
  if (error) return reject(error);
  // results will contain the results of the query
  resolve(results);
  });
  });
}
module.exports = createTable;