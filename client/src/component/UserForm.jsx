import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import { connect } from 'react-redux';


const UserForm = ({e_id}) => {

    console.log(e_id)
    const [inputFields, setInputFields] = useState([
        { proj_name: '', task_name: '', assign_date: '', target_date: '', description: '', status: '' }
    ])


    const addForm = () => {
        let newForm = { proj_name: '', task_name: '', assign_date: '', target_date: '', description: '', status: '' }
        setInputFields([...inputFields, newForm])
    }

    const removeForm = (index1) => {
        let data = [...inputFields];
        data.splice(index1, 1)
        setInputFields(data)

    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
    }

    const handleFormChange = (index1, event) => {
        let data = [...inputFields];
        data[index1][event.target.name] = event.target.value;
        setInputFields(data);
    }

    console.log("inputfields data", inputFields)

    const formDataSubmit = async () => {
        inputFields && inputFields.map((obj)=>{
            obj.e_id = e_id
        })
        try {
            const res = await axios.post(`http://192.168.0.220:3000/api/userEntry `,
                
                    inputFields
                );
            console.log(res.data)
        } catch (error) {
            // Handle errors
            console.log("error", error)
        }
    };

    return (
        <>
            {inputFields.map((input, index1) => {
                return (
                    <form onSubmit={handleOnSubmit}>
                        <div className='form-row' key={index1}>
                            <h4 style={{ textAlign: "center" }}>New Task {index1 + 1}</h4>
                            <Box
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <TextField
                                    fullWidth
                                    name={`proj_name`}
                                    id="standard-basic"
                                    label="Project Name"
                                    variant="standard"
                                    value={input.proj_name}
                                    onChange={event => handleFormChange(index1, event)}
                                />
                                <TextField
                                    fullWidth
                                    name={`task_name`}
                                    id="standard-basic"
                                    label="Task Name"
                                    variant="standard"
                                    multiline
                                    rows={2}
                                    maxRows={2}
                                    value={input.task_name}
                                    onChange={event => handleFormChange(index1, event)}
                                />
                                <TextField
                                    fullWidth
                                    name={`assign_date`}
                                    id="standard-basic"
                                    label="Assign Date (DD/MM/YYYY 00:00:00 AM/PM)"
                                    variant="standard"
                                    value={input.assign_date}
                                    onChange={event => handleFormChange(index1, event)}
                                />
                                <TextField
                                    fullWidth
                                    name={`target_date`}
                                    id="standard-basic"
                                    label="Target Date (DD/MM/YYYY 00:00:00 AM/PM)"
                                    variant="standard"
                                    value={input.target_date}
                                    onChange={event => handleFormChange(index1, event)}
                                />
                                <TextField
                                    fullWidth
                                    name={`description`}
                                    id="standard-basic"
                                    label="Task Description"
                                    variant="standard"
                                    multiline
                                    rows={6}
                                    maxRows={6}
                                    value={input.description}
                                    onChange={event => handleFormChange(index1, event)}
                                />
                                <TextField
                                    fullWidth
                                    name={`status`}
                                    id="standard-basic"
                                    label="Status"
                                    variant="standard"
                                    multiline
                                    value={input.status}
                                    onChange={event => handleFormChange(index1, event)}
                                />
                                <div className='add-form-btn' style={inputFields[index1] == inputFields[(inputFields.length) - 1] ? { display: 'block' } : { visibility: 'hidden' }}>
                                    <span>
                                        <Button
                                            variant="outlined"
                                            style={{ fontSize: "1.2vw", padding: "0 1vw" }}
                                            onClick={() => addForm()}
                                        >
                                            +
                                        </Button>
                                    </span>
                                    <span>
                                        <Button
                                            variant="outlined"
                                            style={{ fontSize: "1.2vw", padding: "0 1vw" }}
                                            onClick={() => removeForm(index1)}
                                        >
                                            -
                                        </Button>
                                    </span>
                                    <span>
                                        <Button
                                            type='submit'
                                            variant="contained"
                                            style={{ fontSize: "1.2vw", padding: "0 1vw" }}
                                            onClick={()=>formDataSubmit()}
                                        >
                                            Submit
                                        </Button>
                                    </span>
                                </div>
                            </Box>
                        </div>
                    </form>

                )
            })}


        </>
    )
}

const withConnect = connect(
    state => ({
        e_id:state.Auth.e_id
    }),
    {},
);

export default (withConnect)(UserForm)