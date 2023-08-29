import "./index.css";
import React from "react";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput";
import { MessageOther, MessageSelf } from "./Message";
import { useState } from "react";
import LoadingSpinner from "../UtilElements/LoadingSpinner";
import { ChatRequest, getResponse } from "@site/src/utils";

const initMsgs = [
    // <MessageSelf
    //     message="I am a fake human user. I am a fake human user. I am a fake human user. I am a fake human user. I am a fake human user. I am a fake human user. "
    //     timestamp="MM/DD 00:00"
    //     photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
    //     displayName="User (Fake)"
    //     avatarDisp={false}
    // />,
    // <MessageSelf
    //     message="Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. "
    //     timestamp="MM/DD 00:00"
    //     photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
    //     displayName="User (Fake)"
    //     avatarDisp={true}
    // />,
    // <MessageOther
    //     message="I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. "
    //     timestamp="MM/DD 00:00"
    //     photoURL=""
    //     displayName="AI Tutor (Fake)"
    //     avatarDisp={false}
    // />,
    <MessageOther
        message="Hello! I am your personalized AI tutor. Let me help you with any question you might have for this course."
        timestamp=""
        displayName="AI Tutor"
        avatarDisp={true}
    />
]

export default function ChatInterface() {

    const [msgs, setMsgs] = useState(initMsgs);

    const [showSpinner, setShowSpinner] = useState(false);

    const spinner = <LoadingSpinner />;

    const addMsg = async (msg: string) => {

        const req: ChatRequest = {
            user: "bob",
            password: "lei",
            timestamp: Date.now(),
            message: msg, // TODO: aggregate message history
        }

        const newMsgs = [
            <MessageSelf
                message={msg}
                timestamp="" // we probably don't need timestamps? 
                photoURL=""
                displayName="User"
                avatarDisp={false}
            />,
            ...msgs
        ];

        const res = await getResponse(req);

        setMsgs(newMsgs);

        setShowSpinner(true);

        if (res) {
            setMsgs(
                [
                    <MessageOther
                        message={res.message}
                        timestamp="" // TODO: add ts?
                        displayName="AI Tutor"
                        avatarDisp={true}
                    />,
                    ...newMsgs
                ]
            );
            setShowSpinner(false);
        } else {
            setMsgs(
                [
                    <MessageOther
                        message={"AI is offline at the moment. Please try again later."}
                        timestamp=""
                        displayName="AI Tutor"
                        avatarDisp={true}
                    />,
                    ...newMsgs
                ]
            );
            setShowSpinner(false);
        }

    }
    return (
        <div className="chatContainer">
            <Paper className="paper" elevation={0}>
                <Paper id="style-1" className="messagesBody">
                    {showSpinner ? spinner : <></>}
                    {msgs}
                </Paper>
                <TextInput onAddMsg={addMsg} />
            </Paper>
        </div>
    )
}