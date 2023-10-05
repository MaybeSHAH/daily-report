import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const UserForm = () => {
    const [formCount, setFormCount] = useState([1])

    console.log("formCount", formCount)

    const countDecr = (formCount) =>{
        if(formCount.length >1){
            formCount.pop()
            setFormCount([...formCount])
        }else{
            setFormCount([...formCount])
        }

    }
    return (
        <>
            {formCount && formCount.map((count, index) => (
                <form key={index}>
                    <div className='form-row'>
                        <h4 style={{ textAlign: "center" }}>New Task {index+1}</h4>
                        <Box
                            sx={{
                                width: '100%',
                            }}
                        >
                            <TextField fullWidth id="standard-basic" label="Project Name" variant="standard" />
                            <TextField fullWidth id="standard-basic" label="Task Name" variant="standard" multiline rows={2} maxRows={2} />
                            <TextField fullWidth id="standard-basic" label="Assign Date" variant="standard" />
                            <TextField fullWidth id="standard-basic" label="Target Date" variant="standard" />
                            <TextField fullWidth id="standard-basic" label="Task Description" variant="standard" multiline rows={6} maxRows={6} />
                            <TextField fullWidth id="standard-basic" label="Status" variant="standard" multiline />
                            <div className='add-form-btn' style={formCount[index] == formCount[(formCount.length)-1] ? { display:'block'} : {visibility : 'hidden'}}>
                                <span> <Button variant="outlined" style={{ fontSize: "1.2vw", padding: "0 1vw" }} onClick={()=>setFormCount([...formCount, (formCount[formCount.length-1])+1])} >+</Button></span>
                                <span> <Button variant="outlined" style={{ fontSize: "1.2vw", padding: "0 1vw" }} onClick={()=>countDecr(formCount)}>-</Button></span>
                            </div>
                        </Box>
                    </div>
                </form>
            ))

            }
        </>
    )
}

export default UserForm