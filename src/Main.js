import React ,{useState} from 'react';
import './Main.css';
import MyInput from './utils/MyInput';
import TextArea from './utils/TextArea'
import {HebrewCalendar,Zmanim, HDate, Location,DafYomi, Event} from '@hebcal/core';

const axios = require('axios');

// import insertNewSynagogue from './server/insertNewSynagogue'
// path.join(__dirname, '../static/index.html')
function Main() {
  const options = {
    year: 5781,
    isHebrewYear: true,
    candlelighting: true,
    location: Location.lookup('San Francisco'),
    sedrot: true,
    omer: true,
  };
  // const zmanim =new Zmanim(new Date(),31.768319,35.21371);
  // console.log('zmanim\n\n',zmanim);
  const daf = new DafYomi(new Date());
  console.log('daf\n',daf.getName());
  console.log('dafgetBlatt\n',daf.getBlatt());
//    let list =  ['sunrise','sunset','dawn','dusk','hour','hourMins','gregEve','nightHour',
// 'nightHourMins',
// 'chatzot' ,
// 'chatzotNight',
// 'alotHaShachar' ,
// 'misheyakir',
// 'misheyakirMachmir',
// 'sofZmanShma',
// 'sofZmanTfilla',
// 'minchaGedola' ,
// 'minchaKetana' ,
// 'plagHaMincha',
// 'neitzHaChama',
// 'shkiah' ];
// list.forEach(element => {
//   console.log(`${element} is ==>`,  zmanim[element]());
// });
/*
  .sunrise() //⇒ Date
.sunset() //⇒ Date
.dawn() //⇒/ Date
.dusk() //;⇒ Date
.hour() ;//⇒ number
.hourMins() ⇒ number
.gregEve() ⇒ Date

.sunsetOffset(offset) ⇒ Date
.sunsetOffsetTime(offset, timeFormat) ⇒ Array.<Object>
.tzeitTime(angle, timeFormat) ⇒ Array.<Object>
static
.formatTime(dt, timeFormat) ⇒ string
.roundTime(dt) ⇒ Date
.timeZoneOffset(tzid, date) ⇒ string
.formatISOWithTimeZone(tzid, date) ⇒ string
  */
  const events = HebrewCalendar.calendar();
  let mydata =new HDate();
  // console.log('HDate\n',mydata.render('he'))
  // console.log('HDate\n',mydata.renderGematriya())
  let counter =0;
  for (const ev of events) {
    counter ++;
    const hd = ev.getDate();
    const date = hd.greg();
    console.log( counter,'\n','ev\n',ev,'\n',date.toLocaleDateString(), ev.render(), hd.toString());
  }
  
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
        <TextArea id={'mainatext'}/>
    );
}
export default Main;