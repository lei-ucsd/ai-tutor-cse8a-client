import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { TextField, Button } from '@mui/material'


export function TextInput() {
    return (
        <>
            <form className="wrapForm"  noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="Message"
                className="wrapText"
                // margin="normal"
            />
            <Button variant="contained" color="primary" className="button">
                <SendIcon />
            </Button>
            </form>
        </>
    )
}



