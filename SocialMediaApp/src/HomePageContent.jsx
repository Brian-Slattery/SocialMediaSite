import React, { useState, useEffect } from 'react';
import './HomePageContent.css'
import './HomeLeftSide.css'
import './HomeRightSide.css'

function HomePageContent(){
    return(
        <div id='pageContainer'>

            <div id='LeftHandContainer'>
                <div id='BuiltInShortcutsContainer'>

                    <div className='containers'>
                        <div id='Profile' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>User Name</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Friends' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Friends</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Memories' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Memories</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Saved' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Saved</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Groups' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Groups</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Videos' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Videos</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Marketplace' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Marketplace</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Feeds' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Feeds</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Events' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Events</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='AdsManager' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Ads Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='SeeMore' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>See More</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='PlayGames' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Play Games</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Pages' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Pages</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='FundRaisers' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>FundRaisers</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='BloodDono' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Blood Donations</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='Messages' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>Messages</p>
                            </div>
                        </div>
                    </div>

                    <div className='containers'>
                        <div id='SeeLess' className='ButtonStyles'>
                            <div className='Icon'>
                                <img src="src/photos/Logo.png" alt="" />
                            </div>
                            <div className='ButtonWords'>
                                <p>See Less</p>
                            </div>
                        </div>
                    </div>

                <div id='UserShortCuts'>

                <div id='UserShortcutContainer'>
                    <div id='UserShortCutsName'>
                        <p>Your Shortcuts</p>
                    </div>
                    <div id='containers'>
                        <div id='EditButton'>
                            <p>Edit</p>
                        </div>
                    </div>
                </div>

                </div>

                <div className='containers'>
                    <div id='Messages' className='ButtonStyles'>
                        <div className='Icon'>
                            <img src="src/photos/Logo.png" alt="" />
                        </div>
                        <div className='ButtonWords'>
                            <p>Messages</p>
                        </div>
                    </div>
                </div>

                <div id='DisclaimerLinksContainer'>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Advertising</li>
                    <li>Ad Choices</li>
                </div>

            </div>
        </div>

            <div id='MiddleContentContainer'>
                <p>sfgrgg</p>
            </div>

            <div id='RighthandContainer'>
                
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

        </div>
    )
}

export default HomePageContent