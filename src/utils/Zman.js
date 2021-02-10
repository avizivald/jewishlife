import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { ComplexZmanimCalendar, getZmanimJson } from "kosher-zmanim";
import SearchLocationInput from './SearchLocationInput'
// import ReactFitText from 'react-fittext';







function Zman(props) {
    var objdatetime = new Date();

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });
    const [zmanim, setZmanim] = useState({});
    const [zmanimInfo, setZmanimInfo] = useState([]);
    function setObjInfoByChange(e) {
        setZmanimInfo(oldArray => [...oldArray, e]);
        // console.log('objInfo ', zmanimInfo);
    }
    useEffect(() => {
        if (coordinates.lng !== null) {
            logFanc();
        }
    }, [coordinates]);
    useEffect(() => {
        if (Object.keys(zmanim).length !== 0) {
            let cuont = 0;
            console.log('zmanim ', zmanim);
            for (const [key, value] of Object.entries(zmanim.Zmanim)) {
                var result = moment(value);
                setObjInfoByChange(<p>{`${cuont}  = ${key}: ${result.format("hh:mm a")}`}</p>)
                cuont ++;
                console.log(`${key}: ${result.format("hh:mm a")}`);
                // if(cuont > 20){
                //     break;
                // }
            }

        }
    }, [zmanim]);
    let onSelect = async (get) => {
        setZmanimInfo([])
        console.log('get  ', get);
        await setCoordinates(get)
    }
    let logFanc = async () => {
        // console.log('ComplexZmanimCalendar ',new ComplexZmanimCalendar(`location=${coordinates.lat},${coordinates.lng}`));

        let timestamp = await new Date().getTime();
        let timestampInSeconds = Math.round(timestamp / 1000);
        console.log('timestamp', timestamp);
        console.log('timestampInSeconds', timestampInSeconds);
        console.log('coordinates.lat,coordinates.lng', coordinates.lat, coordinates.lng);
        await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${coordinates.lat},${coordinates.lng}&timestamp=${timestampInSeconds}&key=AIzaSyDXlGkNJCMPb1QFH_sCeFSkq0QywT88in0`)
            .then(response => response.json())
            .then(data => setZmanim(getZmanimJson(
                {
                    "date": objdatetime,
                    "latitude": coordinates.lat,
                    "longitude": coordinates.lng,
                    "timeZoneId": data.timeZoneId,
                    "complexZmanim": true
                })));
        // zmanim.BasicZmanim


    }
    return (<section className="section1">
        <SearchLocationInput onSelect={onSelect} />
        {zmanimInfo}
    </section>

    );
}
export default Zman;