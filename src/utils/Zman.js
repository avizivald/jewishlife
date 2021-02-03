import React, { useState,useEffect } from 'react';
import { ComplexZmanimCalendar, getZmanimJson } from "kosher-zmanim";
import SearchLocationInput from './SearchLocationInput'
// import ReactFitText from 'react-fittext';







function Zman(props) {
    var objdatetime = new Date();

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });
    const [zmanim, setZmanim] = useState({ });

    useEffect(() => {
        if (coordinates.lng !== null) {
            logFanc();
        }
     }, [coordinates]);
    useEffect(() => {
        if (zmanim !== {}) {
            console.log('zmanim ',zmanim);
        }
     }, [zmanim]);
    let onSelect = async (get) => {
        console.log('get  ',get);
        await setCoordinates(get)
    }
    let logFanc = async () => {
// console.log('ComplexZmanimCalendar ',new ComplexZmanimCalendar(`location=${coordinates.lat},${coordinates.lng}`));

        let timestamp = await new Date().getTime();
        let timestampInSeconds =Math.round(timestamp /1000) ;
        console.log('timestamp', timestamp);
        console.log('timestampInSeconds', timestampInSeconds);
        console.log('coordinates.lat,coordinates.lng', coordinates.lat, coordinates.lng);
        await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${coordinates.lat},${coordinates.lng}&timestamp=${timestampInSeconds}&key=AIzaSyDXlGkNJCMPb1QFH_sCeFSkq0QywT88in0`)
            .then(response => response.json())
            .then(data =>  setZmanim( getZmanimJson(
                {
                    "date": objdatetime,
                    "latitude": coordinates.lat,
                    "longitude": coordinates.lng,
                    "timeZoneId": data.timeZoneId,
                    "complexZmanim":true
                })));
// zmanim.BasicZmanim


    }
    return (<section className="section1">
        <SearchLocationInput onSelect={onSelect} />
    </section>

    );
}
export default Zman;