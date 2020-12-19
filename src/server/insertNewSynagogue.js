// const CreateQuery = require('./getMinyanim');
const getMinyanim = require('./getMinyanim');


  function insertNewSynagogue(Synagogue,shachrait,mincha,arvit){
    getMinyanim.c(Synagogue,shachrait,mincha,arvit).then((value)=>{return value})
}
module.exports = insertNewSynagogue;
