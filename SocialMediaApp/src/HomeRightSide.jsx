import React, { useState, useEffect } from 'react';
import './HomeRightSide.css'

function HomeRightBar(){
    return(

        <div id='RightMainContainer'>
            
            <div id='FriendMessagesContainer'>

                    <div className='ContactsContainers'>

                        <div id='Contacts'>
                            <div>
                                <p>Contacts</p>
                            </div>
                        </div>

                        <div id='ContactsSearchMenuContainers'>

                            <div id='messagesSearchContainer'>

                                <div id='MessagesSearchButton'>
                                    <img src="src/photos/searchImage.png" alt="" />
                                </div>

                            </div>
                            <div id='MessagesMenuContainer'>

                                <div id='MessegesMenuButton'>
                                    <img src="src/photos/Logo.png" alt="" />
                                </div>

                            </div>
                            

                        </div>
                      
                    </div>

                    <div className='containers'>
                        <div id='Friends' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Friends</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Memories' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Memories</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Saved' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Saved</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Groups' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Groups</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Videos' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Videos</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Marketplace' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Marketplace</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Feeds' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Feeds</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Events' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Events</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='AdsManager' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Ads Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='SeeMore' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>See More</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='PlayGames' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Play Games</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Pages' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Pages</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='FundRaisers' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>FundRaisers</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='BloodDono' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Blood Donations</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Messages' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Messages</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='SeeLess' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>See Less</p>
                            </div>
                        </div>
                    </div>

                <div id='GroupChats'>

                    <div id='GroupChatsContainer'>
                        <div id='GroupChatsName'>
                            <p>Group Conversations</p>
                        </div>
                    </div>
                
                </div>

                <div className='containers'>
                        <div id='Messages' className='FriendsButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Messages</p>
                            </div>
                        </div>
                    </div>

            

            </div>

        </div>
        
    )
    
}

export default HomeRightBar