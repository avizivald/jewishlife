import React,{useState} from 'react';
import './Clock.css';


function Clock() {

    const[newTime,setNewTime]= useState('');
    
    function displayClock() {
        var display = new Date().toLocaleTimeString();
        setNewTime(display);
    }
    setTimeout(displayClock, 1000);
    return (
        <section className='clock'>
           {newTime}
        </section>

    );
}
export default Clock;