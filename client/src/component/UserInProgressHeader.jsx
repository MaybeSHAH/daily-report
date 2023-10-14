import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import * as dataActions from '../redux/action/data'
import axios from 'axios';
import * as selectRowActions from "../redux/action/rowSelect"


const UserInProgressHeader = ({ e_id, updateData, rowdata, selectRowData }) => {

    const [date, setdate] = useState(new Date().toLocaleString())

    // const {id, status} = rowdata && rowdata
    const getInProgressData = async (e_id) => {
        try {
            const res = await axios.get(`http://192.168.0.220:3000/api/pendingData?e_id=${e_id}`);
            console.log(res.data)
            const newData = res.data.map((obj, index) => ({ ...obj, Sr: index + 1 }))
            updateData(newData, "InProgress")
        } catch (error) {
            // Handle errors
            console.log("error", error)
        }
    };


    const updateTasktStatus = async (rowdata, date) => {
        try {
            const res = await axios.put(`http://192.168.0.220:3000/api/updateStatus`, {
                id: rowdata.id,
                e_id: rowdata.e_id,
                status: rowdata.status.includes("Delayed") ? "Delayed Under Verification" : "Under Verification",
                completion_date: new Date(date)
            });
            console.log(res.data)
            const newData = res.data.result.map((obj, index) => ({ ...obj, Sr: index + 1 }))
            updateData(newData, "InProgress")
            selectRowData(null, null)
        } catch (error) {
            // Handle errors
            console.log("error", error)
        }
    };

    useEffect(() => {
        getInProgressData(e_id)
    }, [])
// 
//  4:
    let regex1 = new RegExp(/^([0-9]{2}[/])([0-9]{2}[/])([0-9]{4}[,])(\s[0-9]{2}[:])([0-9]{2}[:])([0-9]{2})(\s[A-Z]{2})$/);
    console.log("regex",regex1.test("10/11/2023, 04:48:56 PM"))

    return (
        <>
            <div className='in-progress-filter'>
                <h4>In Progress Tasks</h4>
                <div className='filter'>
                    <label htmlFor="">Status</label>
                    <input type="text" readOnly value={rowdata && "Complete"} er />
                    <label htmlFor="" >Completion Date (MM/DD/YYYY)</label>
                    <input type="text" name="" id="" placeholder='DD/MM/YYYY 00:00:00 AM/PM' value={date} onChange={(e) => setdate(e.target.value)} />
                    <Button
                        // type='button'
                        variant="contained"
                        disabled={rowdata && (new Date(date).getDate() == new Date().getDate() ||
                            new Date(date).getDate() == new Date().getDate()-1 ||
                            new Date(date).getDate() == new Date().getDate() -2) && 
                            new Date(date).getMonth() == new Date().getMonth() &&
                            new Date(date).getFullYear() == new Date().getFullYear() &&
                            regex1.test(date) && (date.endsWith("AM") || date.endsWith("PM"))
                            ? false : true}
                        // style={{ fontSize: "1.2vw", padding: "0.5vh 1vw" }}
                        onClick={() => updateTasktStatus(rowdata, date)}
                    >
                        Update
                    </Button>
                </div>

            </div>
        </>
    )
}

const withConnect = connect(
    state => ({
        e_id: state.Auth.e_id,
        rowdata: state.RowData.rowdata
    }),
    { ...dataActions, ...selectRowActions },
);

export default (withConnect)(UserInProgressHeader)