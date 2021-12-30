import React from 'react';
import './Nav.css'
import Options from './Options/Options';

function NavBar({appName}){
    return (
        <div id='nav'>
         <div id='appname'> {appName}</div>
         <Options/>
        </div>
    );
}

export default NavBar;