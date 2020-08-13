import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1293225687487320065"} />
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="truckpages"
                    options={{height: 400}}
                />

                <TwitterShareButton 
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{ text: "#reactjs is awesome", via: "Gopeshwar Kumawat" }}
                />
            </div>
        </div>
    )
}

export default Widgets
