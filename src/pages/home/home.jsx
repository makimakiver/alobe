import React, { useState } from 'react';
import "./home.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/TimeLine';
import Rightbar from '../../components/rightbar/Rightbar';
import { SidebarData } from '../../components/sidebar/SidebarData';

function Home() {
  
  const [isOuvrir, setIsOuvrir] = useState(false);
  const toggle = () => setIsOuvrir(!isOuvrir);
  console.log(isOuvrir);
  
  return (
    <div>
      <Topbar toggle={toggle}/>
      <div className="homeContainer">
        <Sidebar isOuvrir={isOuvrir}/>
        <Timeline />
        <Rightbar /> 
      </div> 
    </div>
  );
};

export default Home;


// // I commented out and I wrote understandable code such as "console.log"