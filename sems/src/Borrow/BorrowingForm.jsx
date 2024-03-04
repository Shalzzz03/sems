// import React from 'react';
import React, {useState} from 'react';
import { TextField, Button,  Stack, InputLabel, Select, MenuItem, FormControl} from '@mui/material';
import { Link } from "react-router-dom";



function BorrowingForm() {
    const [fullName, setFullName] = useState('')
    const [rollNo, setRollNo] = useState('')
    const [equipment, setEquipment] = useState('')
    const [quantity, setQuantity] = useState('')
    const [timeRequired, setTimeRequired] = useState('')
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(fullName, rollNo, equipment, quantity, timeRequired) 
    }

    function runPythonFun(e) {

    // this request will read the note, but only after it is created!
    fetch("http://localhost:3000/rundemo")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(res => console.log(res))
        .catch(error => {
            console.error('Error during GET request:', error);
            // Handle the error here (e.g., show an error message to the user)
        });
}

 
    return (
        <>
            {/* <FormGroup>
                <FormControlLabel onClick={runPythonFun} control={<Button value="Scan Me"/>} label="Scan your id" />
                <FormControlLabel control={<Button />} label="Manually fill the data" />
            </FormGroup> */}
            <Button variant="outlined" onClick={runPythonFun} color="secondary" type="submit">Scan Me</Button>

            <h2>Register Form</h2>
            <form onSubmit={handleSubmit} action={<Link to="/" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Full Name"
                        onChange={e => setFullName(e.target.value)}
                        value={fullName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Roll No"
                        onChange={e => setRollNo(e.target.value)}
                        value={rollNo}
                        fullWidth
                        required
                    />
                </Stack>
                {/* <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Equipment"
                    onChange={e => setEquipment(e.target.value)}
                    value={equipment}
                    fullWidth
                    required
                    sx={{mb: 4}}
                /> */}
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Equipment</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={equipment}
                    label="Equipment"
                    onChange={e => setEquipment(e.target.value)}
                >
                    <MenuItem value={10}>Vagina</MenuItem>
                    <MenuItem value={20}>Penis</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
                {/* <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Quantity"
                    onChange={e => setQuantity(e.target.value)}
                    value={quantity}
                    required
                    fullWidth
                    sx={{mb: 4}}
                /> */}
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quantity}
                    label="Quantity"
                    onChange={e => setQuantity(e.target.value)}
                >
                    <MenuItem value={10}>Vagina</MenuItem>
                    <MenuItem value={20}>Penis</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
                {/* <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Required Time"
                    onChange={e => setTimeRequired(e.target.value)}
                    value={timeRequired}
                    fullWidth
                    required
                    sx={{mb: 4}}
                /> */}
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Time</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={timeRequired}
                    label="Time"
                    onChange={e => setTimeRequired(e.target.value)}
                >
                    <MenuItem value={10}>Vagina</MenuItem>
                    <MenuItem value={20}>Penis</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
                <Button variant="outlined" color="secondary" type="submit">Submit</Button>
            </form>
            {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
     
        </>
    )
}

export default BorrowingForm
