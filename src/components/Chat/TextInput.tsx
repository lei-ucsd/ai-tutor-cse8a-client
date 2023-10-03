import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { TextField, IconButton, TextareaAutosize } from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import { useState } from 'react';
import TextEditor from './TextEditor';


export function TextInput({ onAddMsg }) {
    const [value, setValue] = useState("");

    return (
        <>
            <div className="wrapForm">
                <TextEditor
                    id="standard-text"
                    className="wrapText"
                    value={value}
                    onChange={setValue}
                />
                <IconButton
                    // variant="contained"
                    sx={[
                        {
                            '&:hover': {
                                color: "var(--ifm-color-primary)",
                                backgroundColor: "transparent"
                            }
                        }]}
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



