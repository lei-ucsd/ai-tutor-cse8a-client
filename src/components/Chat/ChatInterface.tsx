import "./index.css";
import React from "react";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput";
import { MessageOther, MessageSelf } from "./Message";
import { useState } from "react";
import LoadingSpinner from "../UtilElements/LoadingSpinner";
import { ChatRequest, getResponse, Message } from "@site/src/utils";

// const initMsgs = [
//     // <MessageSelf
//     //     message="I am a fake human user. I am a fake human user. I am a fake human user. I am a fake human user. I am a fake human user. I am a fake human user. "
//     //     timestamp="MM/DD 00:00"
//     //     photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
//     //     displayName="User (Fake)"
//     //     avatarDisp={false}
//     // />,
//     // <MessageSelf
//     //     message="Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. "
//     //     timestamp="MM/DD 00:00"
//     //     photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
//     //     displayName="User (Fake)"
//     //     avatarDisp={true}
//     // />,
//     // <MessageOther
//     //     message="I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. "
//     //     timestamp="MM/DD 00:00"
//     //     photoURL=""
//     //     displayName="AI Tutor (Fake)"
//     //     avatarDisp={false}
//     // />,
//     <MessageOther
//         message="Hello! I am your personalized AI tutor. Let me help you with any question you might have for this course."
//         timestamp=""
//         displayName="AI Tutor"
//         avatarDisp={true}
//     />
// ]

const initMsgs: Message[] = [
    {
        type: 'bot',
        message: 'Hello! I am your personalized AI tutor. Let me help you with any question you might have for this course.'
    }
]

export default function ChatInterface() {

    const [rawMsgs, setRawMsgs] = useState(initMsgs);

    const [msgs, setMsgs] = useState(renderMessages(rawMsgs));

    const [showSpinner, setShowSpinner] = useState(false);

    const spinner = <LoadingSpinner />;

    const addMsg = async (msg: string) => {

        const req: ChatRequest = {
            user: "bob",
            password: "lei",
            timestamp: Date.now(),
            message: msg, // TODO: aggregate message history
        }

        if (msgs.length > 1) {
            req.history = getHistory(rawMsgs);
        }

        const newMsgs: Message[] = [
            ...rawMsgs,
            {
                type: 'user',
                message: msg
            }
        ];

        // setRawMsgs(newMsgs);

        console.log(req)
        const res = await getResponse(req);

        setMsgs(renderMessages(newMsgs));

        setShowSpinner(true);

        if (res) {
            newMsgs.push({
                type: 'bot',
                message: res.message
            });
            setRawMsgs(newMsgs);
            setMsgs(
                renderMessages(newMsgs)
            );
            setShowSpinner(false);
        } else {
            newMsgs.push({
                type: 'bot',
                message: "AI is offline at the moment. Please try again later."
            });
            setRawMsgs(newMsgs);
            setMsgs(
                renderMessages(newMsgs)
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

// TODO: not efficient. Refactor this.
function renderMessages(msgs: Message[]) {
    let elems = [];
    for (let i = 0; i < msgs.length; i++) {
        const msg = msgs[i];
        if (msg.type === 'bot') {
            if (i > 0 && msgs[i - 1].type === 'bot') {
                elems = [
                    <MessageOther
                        message={msg.message}
                        timestamp=""
                        displayName="AI Tutor"
                        avatarDisp={false}
                    />,
                    ...elems]
            }
            else {
                elems = [
                    <MessageOther
                        message={msg.message}
                        timestamp=""
                        displayName="AI Tutor"
                        avatarDisp={true}
                    />
                    ,
                    ...elems
                ]
            }
        } else {
            elems = [
                <MessageSelf
                    message={msg.message}
                    timestamp=""
                    displayName="User"
                    avatarDisp={false}
                />,
                ...elems
            ]

        }
    };

    return elems;
}

function getHistory(msgs: Message[]) {
    let history = "\n";
    for (let i = 0; i < msgs.length; i++) {
        const msg = msgs[i];
        if (msg.type === 'bot') {
            history += "AI: " + msg.message + "\n";
        } else {
            history += "User: " + msg.message + "\n";
        }
    }

    return history;
}