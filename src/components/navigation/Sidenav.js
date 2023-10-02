import React from 'react';


import Button from '@mui/material/Button';


// import ExploreIcon from '@mui/icons-material/Explore';
// import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
// import MenuIcon from '@mui/icons-material/Menu';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
//import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
//import { FiHome} from "react-icons/fi";
import './Sidenav.css';

import logo from '../../images/logoinsta.png';

function Sidenav() {
  return (
    <div className="sidenav">
    
      <img src={logo} alt="LOGO" width={120} className="logo" />

      <ChatIcon/>
      
<div className="sidenav__buttons">
        <button className='sidenav__button'>


   
          <span> HOME </span>
        </button>
        <button className='sidenav__button'>
   
          <span> Search </span>
        </button>
        <button className='sidenav__button'>
    
          <span> Explore </span>
        </button>
        <button className='sidenav__button'>
          
          <span> Reels </span>
        </button>
        <button className='sidenav__button'>
         
          <span> Messages </span>
        </button>
        <button className='sidenav__button'>
         
          <span> Notifications </span>
        </button>
        <button className='sidenav__button'>
      
          <span> Create </span>
        </button>
        <div>
          <button className='sidenav__button'>
     
            <span> More </span>
          </button>
        </div>
      </div>


    </div>
  );
}

export default Sidenav;
