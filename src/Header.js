import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton"
import  tinder from  './tinder.jpg'
import ForumIcon from '@material-ui/icons/Forum'

function Header (){
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img
            className="header_logo"
            src={tinder}
            alt="tinder"
            />
            <IconButton>
                <ForumIcon
                className=" header_icon" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header