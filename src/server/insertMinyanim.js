
const connection = require('./connect');
connection.connect();


function CreateQuery(name ,shacharit,mincha,arvit, id=null) {
    
    let insertQuery = `INSERT INTO minyanim (name, shacharit, mincha, arvit, id) VALUES ('${name}', ${shacharit},  ${mincha},  ${arvit},  ${id})`
    return new Promise((resolve, reject) => {
        connection.query(insertQuery, (error, results, fields)=> {
    // error will be an Error if one occurred during the query
    if (error) return reject(error);
    // results will contain the results of the query
    resolve(results);
    });
    });
    }

    module.exports = CreateQuery;

    





   