import "./index.css";
import React from "react";
import { Paper, Button } from "@mui/material";
import { TextInput } from "./TextInput";
import { MessageOther, MessageSelf } from "./Message";
import { useState } from "react";
import LoadingSpinner from "../UtilElements/LoadingSpinner";
import { ChatRequest, getResponse, Message } from "@site/src/utils";


const initRawMsgs: Message[] = [
    {
        type: 'bot',
        message: 'Hello! I am your personalized AI tutor. Let me help you with any question you might have for this course.'
    }
]

const initMsgs = [
    <MessageOther
        message={'Hello! I am your personalized AI tutor. Let me help you with any question you might have for this course.'}
        timestamp=""
        displayName="AI Tutor"
        avatarDisp={true}
    />
]

type Props = {
    logout: () => void
}

export default function ChatInterface({logout}: Props) {

    const [rawMsgs, setRawMsgs] = useState(initRawMsgs);

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

        if (rawMsgs.length > 1) {
            req.history = getHistory(rawMsgs);
        }

        const newMsgs: Message[] = [
            ...rawMsgs,
            {
                type: 'user',
                message: msg
            }
        ];

        const newRenderedMsgs = [
            <MessageSelf
                message={msg}
                timestamp=""
                displayName="User"
                avatarDisp={false}
            />,
            ...msgs
        ]

        setMsgs(newRenderedMsgs);
        setShowSpinner(true);


        console.log(req)
        const res = await getResponse(req);


        if (res) {
            newMsgs.push({
                type: 'bot',
                message: res.message
            });
            setMsgs(
                [
                    <MessageOther
                        message={res.message}
                        timestamp=""
                        displayName="AI Tutor"
                        avatarDisp={true}
                    />,
                    ...newRenderedMsgs
                ]
            );

            setRawMsgs(newMsgs);

            setShowSpinner(false);
        } else {
            newMsgs.push({
                type: 'bot',
                message: "AI is offline at the moment. Please try again later."
            });
            setRawMsgs(newMsgs);
            setMsgs(
                [
                    <MessageOther
                        message={"AI is offline at the moment. Please try again later."}
                        timestamp=""
                        displayName="AI Tutor"
                        avatarDisp={true}
                    />,
                    ...newRenderedMsgs
                ]
            );
            setShowSpinner(false);
        }

    }
    return (
        <div className="chatContainer">
            <div className="logoutBtnContainer">
                <Button
                    className="logoutBtn"
                    sx={{ bgcolor: "var(--ifm-color-primary)", color: "white" }}
                    onClick={() => logout()}
                >
                    End Tutoring Session
                </Button>
            </div>
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

// // TODO: not efficient. Refactor this.
// function renderMessages(msgs: Message[]) {
//     let elems = [];
//     for (let i = 0; i < msgs.length; i++) {
//         const msg = msgs[i];
//         if (msg.type === 'bot') {
//             if (i > 0 && msgs[i - 1].type === 'bot') {
//                 elems = [
//                     <MessageOther
//                         message={msg.message}
//                         timestamp=""
//                         displayName="AI Tutor"
//                         avatarDisp={false}
//                     />,
//                     ...elems]
//             }
//             else {
//                 elems = [
//                     <MessageOther
//                         message={msg.message}
//                         timestamp=""
//                         displayName="AI Tutor"
//                         avatarDisp={true}
//                     />
//                     ,
//                     ...elems
//                 ]
//             }
//         } else {
//             elems = [
//                 <MessageSelf
//                     message={msg.message}
//                     timestamp=""
//                     displayName="User"
//                     avatarDisp={false}
//                 />,
//                 ...elems
//             ]

//         }
//     };

//     return elems;
// }

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