import React ,{useState} from 'react';
import './Main.css';
import MyInput from './utils/MyInput';
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

        axios.post('http://localhost:3001/new', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
//         Synagogue: "עיעיע"
// arvit: "עי"
// mincha: "יעיע"
// shacharit: "יע"
        // insertNewSynagogue(objInfo.)
        console.log( "objInfo ",objInfo);
    }
    
    return (
        <div className='main'>
            <h1>Man</h1>
            <div className='forminput'>
            <MyInput  name={'Synagogue'} onChange ={setObjInfoByChange} title={'enter Synagogue name'} placeholder={'enter Synagogue name'} />
            <MyInput  name={'shacharit'} onChange ={setObjInfoByChange} title={'enter shacharit time'} placeholder={'enter shacharit time'} />
            <MyInput  name={'mincha'} onChange ={setObjInfoByChange} title={'enter mincha time'} placeholder={'enter mincha time'} />
            <MyInput  name={'arvit'} onChange ={setObjInfoByChange} title={'enter arvit time'} placeholder={'enter arvit time'} />
            <button onClick={send}>send</button>
           
            </div>
        </div>
    );
}
export default Main;