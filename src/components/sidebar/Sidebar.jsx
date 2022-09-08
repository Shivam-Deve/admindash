import './Sidebar.scss'
import React from 'react'
import { SettingsSystemDaydreamOutlined, ExitToApp, AccountCircleOutlined, SettingsApplications, NotificationsNone, InsertChart, LocalShipping, PsychologyOutlined, Dashboard, PersonOutline, Store, CreditCard } from "@mui/icons-material"
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to='/'>
                    <span className='logo'>AdminWork</span>
                </Link>
            </div>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li className="items">
                        <Dashboard className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">List</p>
                    <Link to='/users'>
                        <li className="items">
                            <PersonOutline className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products'>
                        <li className="items">
                            <Store className="icon"></Store>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li className="items">
                        <CreditCard className="icon" />
                        <span>Orders</span>
                    </li>
                    <li className="items">
                        <LocalShipping className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">Other</p>
                    <li className="items">
                        <InsertChart className="icon" />
                        <span>Stats</span>
                    </li>
                    <li className="items">
                        <NotificationsNone className="icon" />
                        <span>Notification</span>
                    </li>
                    <p className="title">Services</p>
                    <li className="items">
                        <SettingsSystemDaydreamOutlined className='icon' />
                        <span>System Health</span>
                    </li>
                    <li className="items">
                        <PsychologyOutlined className='icon' />
                        <span>Logs</span>
                    </li>
                    <li className="items">
                        <SettingsApplications className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li className="items">
                        <AccountCircleOutlined className='icon' />
                        <span>Profile</span>
                    </li>
                    <li className="items">
                        <ExitToApp className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
            </div>
        </div>
    )
}

export default Sidebar