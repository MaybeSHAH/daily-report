import React, { useState } from 'react'
import { DatePicker } from 'rsuite';
import "rsuite/dist/rsuite.min.css"
import Button from '@mui/material/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import * as dataActions from '../redux/action/data'

const UserHistoryFilter = ({ e_id, updateData }) => {

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const twodigitDate = (date, type) => {
        let newdate;
        switch (type) {
            case "date":
                if (date.getDate() < 10) {
                     newdate = `0${date.getDate()}`
                    return newdate
                } else {
                     newdate = `${date.getDate()}`
                    return newdate
                }
            case "month":
                if (date.getMonth()+1 < 10) {
                     newdate = `0${date.getMonth() + 1}`
                    return newdate
                } else {
                     newdate = `${date.getMonth() + 1}`
                    return newdate
                }

            default:
                break;
        }
    }

    const getHistoryData = async (e_id, startDate, endDate) => {
        let startdate = new Date(startDate)
        let formatedStartdate = `${twodigitDate(startdate, "date")}/${twodigitDate(startdate, "month")}/${startdate.getFullYear()} ${startdate.toLocaleTimeString().toUpperCase()}`

        let enddate = new Date(endDate)
        let formatedEnddate = `${twodigitDate(enddate, "date")}/${twodigitDate(enddate, "month")}/${enddate.getFullYear()} ${enddate.toLocaleTimeString().toUpperCase()}`


        try {
            const res = await axios.get(`http://192.168.0.220:3000/api/historyData?e_id=${e_id}&start_date=${startdate.toISOString()}&end_date=${enddate.toISOString()}`);
            // const res = await axios.get("http://192.168.0.220:3000/api/historyData?e_id=1&start_date=14/09/2023 2:00:00 AM&end_date=15/09/2023 10:10:09 PM");
            console.log(res.data)
            const newData = res.data.map((obj, index) => ({ ...obj, Sr: index + 1 }))
            updateData(newData ,"history")
        } catch (error) {
            // Handle errors
            console.log("error", error)
        }
    };

    return (
        <>
            <div className='user-history-filter'>
                <h4>User History</h4>
                <div className='filter'>
                    <DatePicker
                        placeholder="Select Start Date"
                        format="yyyy-MM-dd HH:mm:ss"
                        onChange={(date) => setStartDate(date)}
                    />
                    <DatePicker
                        placeholder="Select Start Date"
                        format="yyyy-MM-dd HH:mm:ss"
                        onChange={(date) => setEndDate(date)}

                    />

                    <Button
                        type='button'
                        variant="contained"
                        style={{ fontSize: "1.2vw", padding: "0.5vh 1vw" }}
                        onClick={() => getHistoryData(e_id, startDate, endDate)}
                    >
                        Proceed
                    </Button>
                </div>


            </div>
        </>
    )
}

const withConnect = connect(
    state => ({
        e_id: state.Auth.e_id
    }),
    { ...dataActions },
);

export default (withConnect)(UserHistoryFilter)

