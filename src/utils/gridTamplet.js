import React from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import 'bootstrap/dist/css/bootstrap.min.css';
import './gridTamplet.css';

function GridTamplet(props) {
  const handle = useFullScreenHandle();
  return (
    <div>
      <button onClick={handle.enter}>
        Enter fullscreen
    </button>

      <FullScreen handle={handle}>
        <div class="grid-container">
          <div class="main">main</div>
          <div class="header1">header</div>
          <div class="footer">footer</div>
          <div class="r1">r1</div>
          <div class="r2">r2</div>
          <div class="r3">r3</div>
          <div class="l1">l1</div>
          <div class="l2">l1</div>
          <div class="l3">l3</div>
        </div>
      </FullScreen>
    </div>


  );
}
export default GridTamplet;



