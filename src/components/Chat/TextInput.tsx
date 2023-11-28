import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button, IconButton } from '@mui/material'
import { useState } from 'react';
import TextEditor from './TextEditor';
import { ChatHistory } from '@site/src/utils/data-model';


export function TextInput({ onAddMsg, onSaveHistory, onLoadHistory }) {
    const [value, setValue] = useState("");

    const readJsonFile = (file: Blob) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()

            fileReader.onload = event => {
                if (event.target) {
                    resolve(JSON.parse(event.target.result as string))
                }
            }

            fileReader.onerror = error => reject(error)
            fileReader.readAsText(file)
        });
    };

    const onFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            try {
                const parsedData = (await readJsonFile(event.target.files[0])) as ChatHistory;
                onLoadHistory(parsedData);
            } catch (e) {
                console.error(e);
                alert('Invalid JSON format. File must be a valid chat history.');
            }
        }
    };

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
                    <a id='save-chat-history' hidden />
                    <Button
                        sx={{ bgcolor: "var(--ifm-color-primary)", color: "white", margin: "5px" }}
                        onClick={() => document.getElementById('load-chat-history')?.click()}
                    >
                        Upload
                    </Button>
                    <input id='load-chat-history' type="file" accept=".json,application/json" onChange={onFileUpload} hidden />
                </div>
            </div>
        </>
    )
}



