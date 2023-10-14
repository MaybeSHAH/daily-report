import React, { useEffect } from 'react'
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import * as selectRowActions from "../redux/action/rowSelect"

const UserTable = ({ data, selectRowData, dataType, rowIndex, }) => {

    const tableColumns = [
        {
            Header: 'Sr No ',
            accessor: 'Sr',
        },
        {
            Header: 'Project Name',
            accessor: 'proj_name',
        },
        {
            Header: 'Task Name',
            accessor: 'task_name',
        },
        {
            Header: 'Task Description',
            accessor: 'description',
        },
        {
            Header: 'Assign Date',
            accessor: 'assign_date',
        },
        {
            Header: 'Target Date',
            accessor: 'target_date',
        },
        {
            Header: 'Task Status',
            accessor: 'status',
        },

    ]

    if (dataType && dataType == "InProgress") {
        tableColumns.map((itm, index) => {
            if (index == 6) {
                itm.getProps = (state, rowInfo, column) => {
                    return {
                        style: {
                            background: rowInfo &&rowInfo.row.Sr === rowIndex && rowIndex  && "rgba(139, 140, 140,0.5)",
                            color: rowInfo && rowInfo.row.status === "In Progress" || "Delayed in Progress" ? "#b87114" : null
                        }
                    }
                }
            } else {
                itm.getProps = (state, rowInfo, column) => {
                    return {
                        style: {
                            background: rowInfo &&rowInfo.row.Sr === rowIndex && rowIndex  && "rgba(139, 140, 140,0.5)",
                            color: "#0d0d0d"
                        }
                    }
                }
            }
        })
    }


        

    const onRowClick = (state, rowInfo, column, instance) => {

        return {
            onClick: e => {
                if (dataType == "InProgress") {
                    selectRowData(rowInfo.original, rowInfo.index+1)
                }
            }
        }
    }



    return (
        <>
            <div className='user-table'>
                <ReactTable
                    columns={tableColumns}
                    data={data}
                    defaultPageSize={20}
                    pageSizeOptions={[20, 50, 100, 500]}
                    style={{ textAlign: "center", height: "100%", fontSize: "1vw" }}
                    getTrProps={onRowClick}
                />
            </div>
        </>
    )
}

const withConnect = connect(
    state => ({
        data: state.Data.data,
        dataType: state.Data.dataType,
        dataType: state.Data.dataType,
        rowIndex: state.RowData.rowIndex,
        rowData: state.RowData.rowData
    }),
    { ...selectRowActions },
);

export default (withConnect)(UserTable)
