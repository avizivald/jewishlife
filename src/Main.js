import React ,{useState} from 'react';
import './Main.css';
import MyInput from './utils/MyInput';
import TextArea from './utils/TextArea'
const axios = require('axios');

// import insertNewSynagogue from './server/insertNewSynagogue'
// path.join(__dirname, '../static/index.html')
function Main() {
    const [objInfo,setObjInfo] = useState({});
    function setObjInfoByChange(e){
        setObjInfo({...objInfo,[e.target.name]:e.target.value});
        console.log('objInfo ',objInfo);
    }
    function send (){//    axios.get('minyan')
console.log('objInfo  ',objInfo);
console.log('window  ',window);
console.log('process  ',process);
let host;
    if (window.location.host === 'localhost:3000') {
      host = 'http://localhost:3001/'
    }
    else{
      host = 'https://myfreeserver.herokuapp.com/'
    }
        axios.post(`${host}new`, objInfo)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    return (
        // <div className='main'>
        //     <h1>Man</h1>
        //     <div className='forminput'>
        //     <MyInput  name={'name'} onChange ={setObjInfoByChange} title={'enter Synagogue name'} placeholder={'enter Synagogue name'} />
        //     <MyInput  name={'shacharit'} onChange ={setObjInfoByChange} title={'enter shacharit time'} placeholder={'enter shacharit time'} />
        //     <MyInput  name={'mincha'} onChange ={setObjInfoByChange} title={'enter mincha time'} placeholder={'enter mincha time'} />
        //     <MyInput  name={'arvit'} onChange ={setObjInfoByChange} title={'enter arvit time'} placeholder={'enter arvit time'} />
        //     <button onClick={send}>send</button>
           
        //     </div>
        // </div>
        <TextArea/>
    );
}
export default Main;