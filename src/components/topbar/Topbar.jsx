import { Search, Notifications, Chat } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import "./Topbar.css"
import { Link } from 'react-router-dom'
import {AuthContext} from "../../state/AuthContext"
import 'remixicon/fonts/remixicon.css'
import { CiMenuBurger, IconName } from "react-icons/ci";
import  {toggle} from "../sidebar/Sidebar"

function Topbar({toggle}) {
    console.log("check test hello1")
    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onSearch = (searchTerm) => {
        console.log("search: ", searchTerm)
    }
    const {user} = useContext(AuthContext)
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    console.log({toggle})
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <div className="toolbar" onClick={toggle}>
                <div class="topbarBurger">
                    <CiMenuBurger className='topbarLove'/>                    
                </div>
            </div>
            <div className='logo'>Tuba</div>
        </div>
        <div className="topbarcenter">
            <div className="searchbar">
                <Search className='searchIcon' />
                <input type="text" className="searchInput" placeholder='search on tuba' value={value} onChange={onChange}/>
                <button onClick={() => onSearch(value)}>search</button>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarItemIcons">
                <div className="topbarIconItem">
                    < Notifications className='iconItem'/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat className='iconItem'/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <Link to={`/profile/${user.username}`}>
                <img src={user.ProfilePicture ? PUBLIC_FOLDER+user.ProfilePicture: PUBLIC_FOLDER+"/person/noAvatar.png"} alt="" className="topbarImg" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Topbar