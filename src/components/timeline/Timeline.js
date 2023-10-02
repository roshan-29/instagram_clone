import React from 'react';
import "./Timeline.css";
import Suggestions from './Suggestions';
export default function Timeline() {
  return (
    <div className='Timeline'>
   <div className ="timeline__Left">Timeline</div>
    <div className ="timeline__right"><Suggestions /> </div>
    </div>
  )
}
