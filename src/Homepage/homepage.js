import React from 'react'
import "./Homepage.css";
import Sidenav from '../components/navigation/Sidenav';
import Timeline from '../components/timeline/Timeline';


export default function homepage() {
  return (
    <div  className="homepage">
      <div className="homepage__nav">
      <Sidenav />
      </div>
        <div className="homepage__timeline"> 
        
        </div>
    </div>
    
  )
}
