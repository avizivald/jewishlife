
const connection = require('./connect');
connection.connect();
let data;
function sendMyData(){
  console.log('dataaaaaaa',data);
return data
}
async function getMinyanim(){

  await  connection.query('SELECT * FROM `minyanim`', (error, results, fields) => {
        // error will be an Error if one occurred during the query
        if (error) throw error;
        // results will contain the results of the query
        
        console.log('>> results: ', results );
        var string=JSON.stringify(results);
        console.log('>> string: ', string );
        var json =  JSON.parse(string);
        console.log('>> json: ', json);
        data = json;


        return results;
        // fields will contain information about the returned results
        //    fields (if any)
        // console.log(fields);
    });
    
};
module.exports ={a:getMinyanim,b:sendMyData} ;