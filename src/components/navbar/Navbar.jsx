import React from 'react'
import './Navbar.scss'
import { SearchOutlined, LanguageOutlined, DarkModeOutlined, NotificationsNoneOutlined, ChatBubbleOutline, ListOutlined, FullscreenExitOutlined } from '@mui/icons-material'
function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" name="" id="" placeholder='search...' />
                    <SearchOutlined />
                </div>
                <div className="items">
                    <div className="icon">
                        <LanguageOutlined />
                    </div>
                    <div className="icon">
                        <DarkModeOutlined />
                    </div>
                    <div className="icon">
                        <FullscreenExitOutlined />
                    </div>
                    <div className="icon">
                        <NotificationsNoneOutlined />
                    </div>
                    <div className="icon">
                        <ChatBubbleOutline />
                    </div>
                    <div className="icon">
                        <ListOutlined />
                    </div>
                    <div className="icon">
                        <img src="https://picsum.photos/200" alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar