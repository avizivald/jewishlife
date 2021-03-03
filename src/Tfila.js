import React, { useState } from 'react';
import Shul from './utils/Shul';
import Zman from './utils/Zman';
import { connect } from 'react-redux';

const axios = require('axios');

function Tfila(props) {
  console.log('pppppppvppppp\n0',props);
  let newShuls = [];
  const [shuls, setShuls] = useState([]);
  function a() {
    setShuls(newShuls)
  }
  function ax() {
    let host;
    if (window.location.host === 'localhost:3000') {
      host = 'http://localhost:3001/'
    }
    else {
      host = 'https://myfreeserver.herokuapp.com/'
    }
    console.log('aaaaaaaaaaaaaaaaaaa');
    axios.get(`${host}minyan`)
      .then(function (response) {
        console.log('location.hostname====>>.  ', window.location.hostname);
        console.log('location.====>>.  ', window.location);
        console.log('response==...>>>  ', response);
        response.data.forEach(element => {
          newShuls.push(<Shul shul={element} />)
        })
        setShuls(newShuls)

        // handle success
        console.log(response);
      })
      .catch(function (error) {
        console.log('location.hostname====>>.  ', window.location.hostname);
        console.log('location.====>>.  ', window.location);
        // handle error
        console.log(error);
      })
  }


  return (
    <div>
      <button onClick={ax}>ax</button>
      {/* <button onClick={a}>set</button> */}
      {shuls}
      {props.listOfDaysZmanim}
      <Zman/>
    </div>
  );
}
const mapStateToProps = state =>{
  console.log('mapStateToProps',state);
  return {
    listOfDaysZmanim : state.listOfDaysZmanim
  }
} 
export default connect(mapStateToProps)(Tfila);