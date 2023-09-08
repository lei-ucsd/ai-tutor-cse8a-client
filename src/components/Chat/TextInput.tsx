import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { TextField, IconButton, TextareaAutosize } from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import { useState } from 'react';


export function TextInput({ onAddMsg }) {
    const [value, setValue] = useState("");

    return (
        <>
            {/* <div className="wrapForm" noValidate autoComplete="off"> */}
            <div className="wrapForm">
                {/* <TextField
                    id="standard-text"
                    label="Message"
                    className="wrapText"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}                 
                // margin="normal"
                /> */}
                <Textarea
                    id="standard-text"
                    className="wrapText"
                    value={value}
                    variant="outlined"
                    onChange={(e) => setValue(e.target.value)}
                // margin="normal"
                />
                <IconButton
                    // variant="contained"
                    sx={{ color: "var(--ifm-color-primary" }}
                    className="button"
                    onClick={
                        () => {
                            onAddMsg(value)
                            setValue("")
                        }
                    }
                >
                    <SendIcon sx={{
                        color: "var(--ifm-color-primary)"
                    }} />
                </IconButton>
            </div>
        </>
    )
}



