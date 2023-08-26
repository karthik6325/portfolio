import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import {
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import ChangingProgressProvider from "./ChangingProgressProvider.js";
  import ProgressBar from 'react-animated-progress-bar';


const percentage = 66;
const progressmeter = () => {
  return (
    <div>
      <ProgressBar width="230" trackWidth="13" percentage="90" fontColor="white"  defColor={{
            fair: 'yellow',
            good: 'yellow',
            excellent: 'yellow',
            poor: 'yellow',
          }}/>
    </div>
  )
}

export default progressmeter
