import React, { useState } from "react";
import "./Creationism.css";
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { TextField } from "@mui/material";
import { Form } from 'semantic-ui-react';

 function Creationism () {
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    console.log(PUBLIC_FOLDER)
    const [isOuvrir, setIsOuvrir] = useState(false);
    const toggle = () => setIsOuvrir(!isOuvrir);
    console.log(isOuvrir);
  return (
    <>
    <Topbar toggle={toggle}/>
    <div className="creation">
        <Sidebar isOuvrir={isOuvrir}/>
        <div className="creationWrapper">
            <div className="creationAccount">
                <img className="creationImg" src={PUBLIC_FOLDER+"/person/noAvatar.png"} alt="" />
                <div className="creationImgtxt">profile picture</div>
            </div>
            <img className="creationSeparator" alt="Line" src="line-1.svg" />
            <input type="username" className="creationName" />
            <div className="creationNametxt">Username</div>
            <div className="creationDescription">
                <div className="creationDesctxt">Description</div>
                <Form.TextArea label='About' placeholder='Tell us more about you...' />
            </div>
        </div>
      </div>
    </>
  );
};
export default Creationism;