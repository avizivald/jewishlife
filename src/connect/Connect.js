
import React, { useState } from 'react';
import './Connect.css';
import Help from '../Help';
import {getStringsByLanguages} from '../strings/getStringsByLanguages'

// import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

import MyInput from '../utils/MyInput';
const axios = require('axios');
function Connect() {
  const [objInfo, setObjInfo] = useState({});
  const [user, setUser] = useState(false);
  function setObjInfoByChange(e) {
    setObjInfo({ ...objInfo, [e.target.name]: e.target.value });
    console.log('objInfo ', objInfo);
  }
  function send() {
    console.log('objInfo  ', objInfo);
    console.log('window  ', window.location);
    console.log('process  ', process);
    let host;
    if (window.location.host === 'localhost:3086') {
      host = 'http://localhost:3001/'
    }
    else {
      host = 'https://myfreeserver.herokuapp.com/'
    }
    if (objInfo.Veteranpassword && objInfo.Veteranpassword !== "") {

      axios.post(`${host}oldgabay`, objInfo)
        .then(function (response) {
          if (response.data && response.data.length > 0){
            setUser(true)
          }
          else{

          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {

      axios.post(`${host}newgabay`, objInfo)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const responseGoogle = (response) => {
    console.log(response);
  }
let show = user ? <Help/> :   <div className="Connect">
<section className='connectdiv'>
  {getStringsByLanguages('אנא התחבר לאתר','fr')}

  <h1>You can connect with Google</h1>
  <GoogleLogin
    clientId="449810030569-5pn3veirrku9kahs3k0im1v9k4tigjde.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
    buttonText="LOGIN WITH GOOGLE"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
</section>
<section className='connectdiv'>
  <h1> or log in independently</h1>
  <div className='forminput'>
    <p>Veteran gabay</p>
    <MyInput name={'Veteranname'} onChange={setObjInfoByChange} title={' name'} placeholder={'enter  name'} />
    <MyInput name={'Veteranpassword'} onChange={setObjInfoByChange} title={'password'} placeholder={'enter  pass'} />
    <p>create a new gabay</p>
    <MyInput name={'name'} onChange={setObjInfoByChange} title={' name'} placeholder={'enter  name'} />
    <MyInput name={'mail'} onChange={setObjInfoByChange} title={'mail'} placeholder={'enter  mail'} />
    <MyInput name={'password'} onChange={setObjInfoByChange} title={'password'} placeholder={'create  pass'} />
    <button onClick={send}>send</button>

  </div>
</section>
</div>
  return (
  show
  );
}

export default Connect;
