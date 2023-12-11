import React, { useState, useEffect } from 'react';
import './PageTop.css';


function PageTop() {
    return(
        <div id='top'>

            <div id='TopContainer'>

                <div id='TopSectionContainer1'>
                    <div id='HomeAndSearchBarContainer'>

                        <div id='HomeButtonContainer'>
                            <img id="HomeButton" src="src/photos/Logo.png" alt="" />
                        </div>
                        <div id='SearchbarStuff'>
                            <input type="text" placeholder='Search Social'/>
                        </div>
                    </div>
                </div>

                <div id='TopSectionContainer2'>
                    <div id='ContentButtonsContainer'>
                        <div id='MainContentButton'>
                            <img src="src/photos/Home.png" alt="" />
                        </div>
                        <div id='VideoContentButton'>
                            <img src="src/photos/VideoIcon.png" alt="" />
                        </div>
                        <div id='ShoppingContentButton'>
                            <img src="src/photos/ShopIcon.png" alt="" />
                        </div>
                        <div id='GamingContentButton'>
                            <img src="src/photos/GamesIcon.png" alt="" />
                        </div>
                    </div>
                </div>

                <div id='TopSectionContainer3'>
                    <div id='MenuAndNotificationButtonsContainer'>
                        <div id='NavigationButton'>
                            <img src="src/photos/navigationLogo.png" alt="" />
                        </div>
                        <div id='MessagesButton'>
                            <img src="src/photos/messagesIcon.png" alt="" />
                        </div>
                        <div id='NotificationButton'>
                            <img src="src/photos/BellLogo.png" alt="" />
                        </div>
                        <div id='ProfileButton'>
                            <img src="src/photos/Logo.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PageTop
