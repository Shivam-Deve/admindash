import './Featured.scss'
import React from 'react'
import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material'
import "react-circular-progressbar/dist/styles.css"
import { CircularProgressbar } from 'react-circular-progressbar'
function Featured() {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVert className='moreVert' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar
                        value={70}
                        text={"70 %"}
                        strokeWidth={5}
                    />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$ 420</p>
                <p className="desc">Previous transactions processing. Last payments may not be included.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">
                            Target
                        </div>
                        <div className="itemResult">
                            <KeyboardArrowUp />
                            <div className="resultAmount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">
                            Last Week
                        </div>
                        <div className="itemResult">
                            <KeyboardArrowDown />
                            <div className="resultAmount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">
                            Last Month
                        </div>
                        <div className="itemResult">
                            <KeyboardArrowDown />
                            <div className="resultAmount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured