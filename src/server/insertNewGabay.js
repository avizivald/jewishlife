// const CreateQuery = require('./getMinyanim');
const getMinyanim = require('./getMinyanim');


  function insertNewGabay(gabainame,gabaimail,gabaiid){
    console.log('gabainame,gabaimail,gabaiid ===>>  ',gabainame,gabaimail,gabaiid);
    getMinyanim.d(gabainame,gabaimail,gabaiid).then((value)=>{return value})
}
module.exports = insertNewGabay;
