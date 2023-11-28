import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button, IconButton } from '@mui/material'
import { useState } from 'react';
import TextEditor from './TextEditor';


export function TextInput({ onAddMsg, onSaveHistory }) {
    const [value, setValue] = useState("");

    return (
        <>
            <div className="wrapForm">
                <TextEditor
                    id="standard-text"
                    className="wrapText"
                    value={value}
                    onChange={(x) => {
                        setValue(x)
                    }}
                />
                <IconButton
                    disableRipple
                    disableFocusRipple
                    // variant="contained"
                    sx={[
                        {
                            '&:hover': {
                                color: "var(--ifm-color-primary)",
                                backgroundColor: "transparent"
                            }
                        },
                        {
                            // // '&:focus': {
                            //     transition: "none",
                            //     WebkitTransition: "none",
                            //     backgroundColor: "transparent",
                            //     color: "transparent",
                            //     boxShadow: "0 0 0",
                            //     WebkitBoxShadow: "none",
                            //     outline: "none",
                            // // }
                            boxShadow: '0'
                        }
                    ]}
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
                <div className="aux-buttons">
                    <Button
                        sx={{ bgcolor: "var(--ifm-color-primary)", color: "white", margin: "5px" }}
                        onClick={() => onSaveHistory('ai-tutor-history.json')}
                    >
                        Download
                    </Button>
                    <Button
                        sx={{ bgcolor: "var(--ifm-color-primary)", color: "white", margin: "5px" }}
                    >
                        Upload
                    </Button>
                </div>
            </div>
        </>
    )
}



