import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {getStringsByLanguages} from '../strings/getStringsByLanguages'
import { ComplexZmanimCalendar, getZmanimJson } from "kosher-zmanim";
import SearchLocationInput from './SearchLocationInput';
// let fs = require('browserify');


// import ReactFitText from 'react-fittext';







function Zman(props) {
    var objdatetime = new Date();

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });
    const [zmanim, setZmanim] = useState({});
    const [zmanimInfo, setZmanimInfo] = useState([])
    const [zmaneyHayom, setZmaneyHayom] = useState([]);
    function setObjInfoByChange(e) {
        setZmanimInfo(oldArray => [...oldArray, e]);
        // console.log('objInfo ', zmanimInfo);
    }
    useEffect(() => {
        if (coordinates.lng !== null) {
            getzmanimFanc();
        }
    }, [coordinates]);
    let list = [
        "AlosHashachar",
        "Misheyakir11Point5Degrees",
        "Sunrise",
        "SofZmanShmaMGA16Point1Degrees",
        "SofZmanShmaGRA",
        "Chatzos",
        "MinchaGedola30Minutes",
        "PlagHamincha",
        "Sunset",
        "Tzais",
        "Tzais72",
    ]
   

    useEffect(async () => {
        if (Object.keys(zmanim).length !== 0) {
            let cuont = 0;
            console.log('zmanim ', zmanim);
            for (const [keyFromZmanim, value] of Object.entries(zmanim.Zmanim)) {
                if (list.includes(keyFromZmanim)) {
                let current = moment(zmanim.Zmanim[keyFromZmanim]);

                    console.log('keyFromZmanim ',getStringsByLanguages(keyFromZmanim,'he') , current.format("hh:mm a"));
                  
                    await setZmaneyHayom(oldArray => [...oldArray,[getStringsByLanguages(keyFromZmanim,'he') , current.format("hh:mm a")]] );
                    console.log('zmaneyHayom   ', zmaneyHayom);
                    console.log(true);
                } else {
                    console.log(false);
                }
                var result = moment(value);
                setObjInfoByChange(<p>{`${cuont}  = ${keyFromZmanim}: ${result.format("hh:mm a")}`}</p>)
                cuont++;
                // console.log(`${keyFromZmanim}: ${result.format("hh:mm a")}`);
            }

        }
    }, [zmanim]);
    let onSelect = async (get) => {
        setZmanimInfo([])
        console.log('get  ', get);
        await setCoordinates(get)
    }
    let saveZmanim = async (data) => {
        setZmanim(data);
        console.log(data);
        // fs.writeFile('./textFiles/zmanim.txt', data, function(err) {
        //     fs.readFile('./textFiles/zmanim.txt', function(err, contents) {
        //       console.log(contents.toString());
        //     });
        //   });
        // fs.writeFile('./textFiles/zmanim.txt', data, function (err) {
        //     if (err) throw err;
        //     console.log('Saved!');
        // });
    }
    let getzmanimFanc = async () => {
        // console.log('ComplexZmanimCalendar ',new ComplexZmanimCalendar(`location=${coordinates.lat},${coordinates.lng}`));

        let timestamp = await new Date().getTime();
        let timestampInSeconds = Math.round(timestamp / 1000);
        console.log('timestamp', timestamp);
        console.log('timestampInSeconds', timestampInSeconds);
        console.log('coordinates.lat,coordinates.lng', coordinates.lat, coordinates.lng);
        await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${coordinates.lat},${coordinates.lng}&timestamp=${timestampInSeconds}&key=AIzaSyDXlGkNJCMPb1QFH_sCeFSkq0QywT88in0`)
            .then(response => response.json())
            .then(data => saveZmanim(getZmanimJson(
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