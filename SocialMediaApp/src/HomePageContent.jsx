import React, { useState, useEffect } from 'react';
import './HomePageContent.css'
import HomeLeftBar from './HomeLeftSide';
import HomeRightBar from './HomeRightSide';

function HomePageContent(){
    return(
        <div id='pageContainer'>

            <div id='LeftHandContainer'>
                <HomeLeftBar/> 
            </div>

            <div id='MiddleContentContainer'>
                <p>sfgrgg</p>
            </div>

            <div id='RighthandContainer'>
                <HomeRightBar/>
            </div>

        </div>
    )
}

export default HomePageContent