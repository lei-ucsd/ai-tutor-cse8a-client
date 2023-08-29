import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { TextField, IconButton } from '@mui/material'
import { useState } from 'react';


export function TextInput({ onAddMsg }) {
    const [value, setValue] = useState("");

    return (
        <>
            {/* <div className="wrapForm" noValidate autoComplete="off"> */}
            <div className="wrapForm">
                <TextField
                    id="standard-text"
                    label="Message"
                    className="wrapText"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                // margin="normal"
                />
                <IconButton
                    // variant="contained"
                    sx={{color: "var(--ifm-color-primary"}}
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



