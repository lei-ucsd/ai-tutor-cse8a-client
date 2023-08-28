import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { TextField, Button } from '@mui/material'
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
                <Button
                    variant="contained"
                    color="primary"
                    className="button"
                    onClick={
                        () => {
                            onAddMsg(value)
                            setValue("")
                        }
                    }
                >
                    <SendIcon />
                </Button>
            </div>
        </>
    )
}



