import './Widget.scss';
import React, { useState } from 'react'
import { PersonOutlined, KeyboardArrowUp, AccountBalanceWalletOutlined, ShoppingCartOutlined, MonetizationOnOutlined } from '@mui/icons-material';

function Widget({ type }) {
    const [types, setType] = useState(() => ({
        users: {
            title: "Users",
            isMoney: false,
            link: "See all users",
            icon: <PersonOutlined className='icon' />
        },
        orders: {
            title: "Orders",
            isMoney: false,
            link: "View all orders",
            icon: <ShoppingCartOutlined className='icon' />
        },
        earnings: {
            title: "Earnings",
            isMoney: true,
            link: "View net earnings",
            icon: <MonetizationOnOutlined className='icon' />
        },
        balance: {
            title: "Balance",
            isMoney: true,
            link: "See details",
            icon: <AccountBalanceWalletOutlined className='icon' />
        },

    }))
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{types[type].title}</span>
                <span className="counter">{types[type].isMoney && "$ "}21312</span>
                <span className="link">{types[type].link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    20%
                </div>
                {types[type].icon}
            </div>
        </div>
    )
}

export default Widget