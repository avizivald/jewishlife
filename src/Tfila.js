import React ,{useState} from 'react';
import Shul from './utils/Shul';
const axios = require('axios');

function Tfila() {
  let newShuls=[];
  const [shuls,setShuls] = useState([]);
  function a (){
    setShuls(newShuls)
  }
  function ax() {
    console.log('aaaaaaaaaaaaaaaaaaa');
    axios.get('http://localhost:3001/minyan')
      .then(function (response) {
        response.data.forEach(element => {
          newShuls.push(<Shul shul={element} />)
        })
        setShuls(newShuls)

        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
 
  return (
    <div>
      <button onClick={ax}>ax</button>
      {/* <button onClick={a}>set</button> */}
      {shuls}
    </div>
  );
}
export default Tfila;