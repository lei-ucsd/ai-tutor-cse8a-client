import "./index.css";
import React from "react";
import { Paper } from "@mui/material";
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

// TODO: the back end supports up to analyze at the moment
const bloomTaxonomy = ['create', 'evaluate', 'analyze', 'apply', 'understand']; 

// hard coded threshold for all steps
const THRESHOLD = 3;

export default function ChatInterface() {

    const [currentStep, setCurrentStep] = useState(undefined);

    const [rawMsgs, setRawMsgs] = useState(initRawMsgs);

    const [msgs, setMsgs] = useState(initMsgs);

    const [showSpinner, setShowSpinner] = useState(false);

    const [correctSoFar, setCorrectSoFar] = useState(0);

    const spinner = <LoadingSpinner />;

    const addMsg = async (msg: string) => {

        const req: ChatRequest = {
            user: "bob",
            password: "lei",
            timestamp: Date.now(),
            message: msg, 
            correctSoFar: correctSoFar,
            threshold: THRESHOLD
        }

        if (currentStep) {
            req.current_step = currentStep;
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

            // if res.correct then increment question count
            // if question count exceeds threshold then change step
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

            if (!res['current_step']) {
                alert('Error: current_step not found in response.');
                console.error(res);
            } else {
                if (res['current_step'] !== currentStep) {
                    setCorrectSoFar(0);
                }
                setCurrentStep(res['current_step']);
            }

            if (res['correct'] === true) {
                setCorrectSoFar(correctSoFar + 1);
            }
            
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
            <Paper className="paper" elevation={0}>
                <Paper id="style-1" className="messagesBody">
                    <div className="messages">
                        {showSpinner ? spinner : <></>}
                        {msgs}
                    </div>
                </Paper>
                <TextInput onAddMsg={addMsg} />
            </Paper>
        </div>
    )
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