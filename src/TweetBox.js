import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    function sendTweet(e) {
        e.preventDefault();

        db.collection('posts').add({     
            displayName: 'Taksh Kumawat',
            username: 'taksh_k',
            verified: true,
            text: tweetMessage,
            image: tweetImage
        })

        setTweetMessage('');
        setTweetImage('');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        type="text"
                        placeholder="What's happening?" 
                    />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    type={tweetImage}
                    placeholder="Optional: Enter image URL" 
                />

                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
