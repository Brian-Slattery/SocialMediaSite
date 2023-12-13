import React, { useState, useEffect } from 'react';
import './HomePageContent.css'
import HomeLeftBar from './HomeLeftSide';

function HomePageContent(){
    return(
        <div id='pageContainer'>

            <div id='LeftHandContainer'>
                <HomeLeftBar/> 
            </div>

            <div id='MiddleContentContainer'>
                

            </div>

            <div id='RighthandContainer'>
                
            </div>

        </div>
    )
}

export default HomePageContent