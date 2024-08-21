import React from 'react'

import { useState } from "react";
import NavBar from './HomeKit/NavBar';
import SidBar from './HomeKit/SidBar';
import Suggestion from './HomeKit/Suggestion';
import VideosSection from './HomeKit/VideosSection';

const Home = () => {
    const [showSideBar,setShowSideBar]=useState(false);
    const handleClckSideBar=()=>{
     return setShowSideBar(!showSideBar);
    }
    return (
      <div className="">
        <NavBar  handleClckSideBar={handleClckSideBar} />
        <Suggestion />  
        <SidBar showSideBar={showSideBar} handleClckSideBar={handleClckSideBar}/>
        <VideosSection/>
      </div> 
    );
}

export default Home
