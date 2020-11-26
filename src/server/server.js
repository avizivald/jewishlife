const express = require('express')
const app = express()
const port = 3001;
const getMinyanim = require('./getMinyanim');
getMinyanim.a();
async function getData (){
    let ens =await getMinyanim.b();
return ens
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/new', (req, res) => {
  console.log('req',req);
  res.send('Hello World!')
})
 app.get('/minyan', (req, res) => {
     
     getData() .then(result => res.send(result))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})