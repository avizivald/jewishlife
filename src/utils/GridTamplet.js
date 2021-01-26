import React from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Cell from './Cell';
import MizrachCell from './MizrachCell'
import TextArea from './TextArea';
import Clock from './Clock'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './gridTamplet.css';

function GridTamplet(props) {
  const handle = useFullScreenHandle();
  return (
    <div>
      <button onClick={handle.enter}>
         fullscreen
    </button>

      <FullScreen handle={handle}>
        <div className="grid-container">
          <div className="mainOfGA"><TextArea min={30}/></div>
          <div className="header1"><MizrachCell/></div>
          <div className="footer">footer</div>
          <div className="r1"><Cell/></div>
          <div className="r2"><Cell/></div>
          <div className="r3">r3</div>
          <div className="l1"><Clock/></div>
          <div className="l2"><TextArea /></div>
          <div className="l3">l3</div>
        </div>
      </FullScreen>
    </div>


  );
}
export default GridTamplet;


