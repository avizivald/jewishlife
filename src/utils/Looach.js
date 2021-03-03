import React,{useState,useEffect} from 'react';
import TextArea from './TextArea';
import './Looach.css';
import { connect } from 'react-redux';


function Looach(props) {
    const [listTimes, setlistTimes] = useState([])
    let obj ={
        "עלות השחר":"AlosHashachar",
        "זמן ציצית":"Misheyakir11Point5Degrees",
        "נץ החמה":"Sunrise",
        "סוף זמן קש מגא":"SofZmanShmaMGA16Point1Degrees",
        "סוף זמן קש גרא":"SofZmanShmaGRA",
        "חצות":"Chatzos",
        "מנחה גדולה":"MinchaGedola30Minutes",
        "פלג המנחה":"PlagHamincha",
        "שקיעה":"Sunset",
        "צאת הכוכבים":"Tzais",
        "רבינו תם":"Tzais72",
    }
    useEffect(() => {
        let zmanArrey =props.listOfDaysZmanim.length > 0 ?props.listOfDaysZmanim : Object.entries(obj);
        console.log('zmanArrey ',zmanArrey);
        zmanArrey.forEach(arg => {
             setlistTimes(oldArray => [...oldArray, <p><span>{arg[0]}</span>{'  '}<span>{arg[1]}</span></p>]) 
             console.log('arg ',arg);
         });
    }, []);
   
    
    return (
        <section className='Looach'>
            <div className='any'>
                <div className ='section1'>
           {listTimes}

                </div>
            </div>
        </section>

    );
}
const mapStateToProps = state =>{
    console.log('mapStateToProps',state);
    return {
      listOfDaysZmanim : state.listOfDaysZmanim
    }}
// export default Looach;
export default connect(mapStateToProps)(Looach);
