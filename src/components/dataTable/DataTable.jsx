import './DataTable.scss';
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatableSource';
import { Link } from 'react-router-dom'
function DataTable({ title }) {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to='/users/test'>

                            <div className="viewButton">
                                View
                            </div>
                        </Link>
                        <div className="deleteButton">
                            Delete
                        </div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className="dataTable">
            <div className="dataTableTitle">
                {title}
                <Link to='/users/new'>
                    Add New
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable