
const connection = require('./connect');
// connection.connect();
const createTable = require('./createTable')
let data
let createTableUsers = `CREATE TABLE IF NOT EXISTS users (

  id int(11) NOT NULL auto_increment,   
  age int(11) NOT NULL default 0,       
  fname varchar(250)  NOT NULL default '',     
  lname varchar(250)  NOT NULL default '',     
  mail  varchar(250) NOT NULL default '',
  tel varchar(250) NOT NULL default '',    
  street varchar(250) NOT NULL default '',
  city varchar(250) NOT NULL default '',
   PRIMARY KEY  (id)

);`
let createTableMinyanim = `CREATE TABLE IF NOT EXISTS minyanim (

  id int(11) NOT NULL auto_increment,   
  synagogue varchar(250)  NOT NULL default '',     
  shacharit varchar(250)  NOT NULL default '',     
  mincha  varchar(250) NOT NULL default '',
  arvit varchar(250) NOT NULL default '',    
   PRIMARY KEY  (id)

);`
function sendMyData() {
  console.log('dataaaaaaa',data);
  return data
}
function CreateQuery(name, shacharit, mincha, arvit) {
  createTable(createTableUsers);
  createTable(createTableMinyanim);
  let insertQuery = `INSERT INTO minyanim (synagogue, shacharit, mincha, arvit) VALUES ('${name}', ${shacharit},  ${mincha},  ${arvit})`
  return new Promise((resolve, reject) => {
    console.log("insertQuery  ===>>>> ", insertQuery);
    connection.query(insertQuery, (error, results, fields) => {
      // error will be an Error if one occurred during the query
      if (error) return reject(error);
      // results will contain the results of the query
      resolve(results);
    });
  });
}
// function createTable(query){

//   return new Promise((resolve, reject) => {
//     console.log("query  ===>>>> ",query);
//       connection.query(query, (error, results, fields)=> {
//   // error will be an Error if one occurred during the query
//   if (error) return reject(error);
//   // results will contain the results of the query
//   resolve(results);
//   });
//   });
// }

// module.exports = CreateQuery;
async function getMinyanim() {

  await connection.query('SELECT * FROM `minyanim`', (error, results, fields) => {
    // error will be an Error if one occurred during the query
    if (error) throw error;
    // results will contain the results of the query

    // console.log('>> results: ', results );
    var string = JSON.stringify(results);
    // console.log('>> string: ', string );
    var json = JSON.parse(string);
    // console.log('>> json: ', json);
    data = json;
    console.log('result  ', results);

    return results;
    // fields will contain information about the returned results
    //    fields (if any)
    // console.log(fields);
  });

};
module.exports = { a: getMinyanim, b: sendMyData, c: CreateQuery };