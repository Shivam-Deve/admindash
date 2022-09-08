import './Home.scss';
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import ReactTable from '../../components/table/ReactTable';
function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="users" />
                    <Widget type="orders" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspct={2 / 1} title='Last 6 Months (Revenue)' />
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Latest Transactions
                    </div>
                    <ReactTable />
                </div>
            </div>
        </div>
    )
}

export default Home