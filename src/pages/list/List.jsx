import './List.scss';
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/dataTable/DataTable';

function List({ title }) {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DataTable title={title} />
            </div>
        </div>
    )
}

export default List