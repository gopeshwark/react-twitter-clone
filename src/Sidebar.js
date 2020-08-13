import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import SidebarOption from './SidebarOptions'
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">  
            <TwitterIcon className="twitter-icon" />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Mail" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="List" />
            <SidebarOption Icon={PermIdentityIcon} text="profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
