const express = require('express')
const app = express();
const cool = require('cool-ascii-faces');

const port = 3001;
const insertNewSynagogue =require('./insertNewSynagogue')
const getMinyanim = require('./getMinyanim');
getMinyanim.a();
async function getData (){
    let ens =await getMinyanim.b();
return ens
}
app.get('/', (req, res) => {
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
     
     getData() .then(result => res.send(result))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})