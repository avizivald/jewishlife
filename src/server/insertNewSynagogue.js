// const CreateQuery = require('./getMinyanim');
const getMinyanim = require('./getMinyanim');


  function insertNewSynagogue(Synagogue,shachrait,mincha,arvit){
    console.log('insertNewSynagogue');
    console.log('444444444444444444444444444444444444444');
    console.log('444444444444444444444444444444444444444');
    console.log(Synagogue,shachrait,mincha,arvit);
    console.log('444444444444444444444444444444444444444');
    console.log('444444444444444444444444444444444444444');
    console.log('444444444444444444444444444444444444444');
    getMinyanim.c(Synagogue,shachrait,mincha,arvit).then((value)=>{return value})
}
module.exports = insertNewSynagogue;
