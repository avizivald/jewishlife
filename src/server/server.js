const express = require('express')
const app = express();
const cool = require('cool-ascii-faces');

const port = process.env.PORT || 3001;
console.log("my port ==== :  ",port);
const insertNewSynagogue =require('./insertNewSynagogue')
const insertNewGabay =require('./insertNewGabay')
const getMinyanim = require('./getMinyanim');
getMinyanim.a();
async function getData (){
    let ens =await getMinyanim.b();
    console.log('ens==>>>',ens);
return ens
}
app.get('/', (req, res) => {
  console.log('process.env===>>>>  ',process.env);
  res.send('Hello World!')
})
app.get('/cool', (req, res) => {
  res.send(cool())
})



app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.post('/new', (req, res) => {
  console.log('reqqqqqqqqqqqqqqqqq',req.body);
  insertNewSynagogue(req.body.name,req.body.shacharit,req.body.mincha,req.body.arvit)
  res.send('Hello World!')
})
app.get('/minyan', (req, res) => {
  console.log("minyan");
  getData().then(result => res.send(result))
})
app.post('/newgabay', (req, res) => {
  console.log('newgabay newgabay ',req.body);
  insertNewGabay(req.body.name,req.body.mail,req.body.password)
  res.send('new gabay!!!')
})
 app.post('/oldgabay', async(req, res) => {
  console.log('oldgabay oldgabay ',req.body);
  let answer = await getMinyanim.CreateQuerySelectGabai(req.body.Veteranpassword);
  console.log('answer answer ',answer);

  res.send(answer)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})