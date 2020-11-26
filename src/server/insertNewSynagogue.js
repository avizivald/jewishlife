const insert = require('./insertMinyanim');


  function insertNewSynagogue(Synagogue,shachrait,mincha,arvit){
    insert(Synagogue,shachrait,mincha,arvit).then((value)=>{console.log('vvvvvvvvvvvvvv',value);})
}
module.exports = insertNewSynagogue;
