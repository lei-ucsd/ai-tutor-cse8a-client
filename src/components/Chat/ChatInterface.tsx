import "./index.css";
import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput";
import { MessageOther, MessageSelf } from "./Message";
import { useState } from "react";
import LoadingSpinner from "../UtilElements/LoadingSpinner";
import { ChatRequest, ChatRequestStream, ChatResponseStream, getResponse, Message, useStreaming } from "@site/src/utils";


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
const bloomsTaxonomy = ['remember', 'understand', 'apply', 'analyze', 'evaluate', 'create'];

// hard coded threshold for all steps
const THRESHOLD = 1;

export default function ChatInterface() {

    const [currentStep, setCurrentStep] = useState(undefined);

    const [questions, setQuestions] = useState(undefined);

    const [rawMsgs, setRawMsgs] = useState(initRawMsgs);

    const [msgs, setMsgs] = useState(initMsgs);

    const [data, setData] = useState([]);

    const [showSpinner, setShowSpinner] = useState(false);

    const [correctSoFar, setCorrectSoFar] = useState(0);

    const spinner = <LoadingSpinner />;

    const addMsg = async (msg: string) => {

        if (msg.trim().length === 0) {
            alert('Please enter a non-empty message.');
            return;
        }

        const req: ChatRequest = {
            user: "kayla",
            password: "lei",
            timestamp: Date.now(),
            message: msg,
            correctSoFar: correctSoFar,
            threshold: THRESHOLD
        }

        if (currentStep) {
            req.current_step = currentStep;
        }


        if (questions) {
            req.questions = JSON.stringify(questions);
        }

        const newMsgs: Message[] = [
            ...rawMsgs,
            {
                type: 'user',
                message: msg
            }
        ];




        if (useStreaming) {
            req.history = getHistory(newMsgs);

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

            getResponse(req, setData)
                .then((res) => {
                    const msg = res.tutor_response + '\n\n' + res.follow_up_question;
                    console.log("msg: ", msg)

                    const [msgElems, msgData] = updateMsgList(msg, 'AI Tutor', newMsgs, newRenderedMsgs, setMsgs, setRawMsgs);

                    setData([]);


                    // track correctness
                    if (currentStep && res.answer_is_correct === "true") {
                        setCorrectSoFar(correctSoFar + 1);
                    }

                    // update current step if correctSoFar reaches threashold
                    if (correctSoFar === THRESHOLD) {
                        const idxCurrent = bloomsTaxonomy.indexOf(currentStep);
                        const idxNew = idxCurrent + 1;
                        if (currentStep === 'analyze' || idxNew === bloomsTaxonomy.length) {
                            // the backend only reasonably supports steps up to `analyze`; 
                            // however, user might reach `create` if their first question is determined to be at that level
                            // we should end the conversation whenever (1) the step naturally reaches beyond 'analyze' or (2) the user finishes 'create'

                            // TODO backend support?
                            const msg = 'Congratulations! You have successfully completed reviewing the concept! Would you like to review another concept?';
                            const _ = updateMsgList(msg, 'AI Tutor', msgData, msgElems, setMsgs, setRawMsgs);
                        } else {
                            const idx = bloomsTaxonomy.indexOf(currentStep);
                            const newStep = bloomsTaxonomy[idx + 1];
                            setCurrentStep(newStep);
                            setCorrectSoFar(0);
                            // TODO reset previous questions
                            // TODO reset last question
                        }
                    }

                    if (!currentStep && res.question_level !== "") {
                        setCurrentStep(res.question_level);
                    }

                    console.log(currentStep, correctSoFar);

                })
                .catch((err) => {
                    console.error(err);
                });


        } else {
            // code for the non-streaming (outdated) backend
            // TODO refactor out
            if (rawMsgs.length > 1) {
                req.history = getHistory(rawMsgs);
            }

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
                        setQuestions(undefined);
                    }
                    setCurrentStep(res['current_step']);
                }

                if (res['correct'] === true) {
                    setCorrectSoFar(correctSoFar + 1);
                }

                if (res['questions']) {
                    setQuestions(res['questions']);
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

    }


    return (
        <div className="chatContainer" key="chat-container">
            <Paper className="paper" elevation={0}>
                <Paper id="style-1" className="messagesBody" key="messages-body">
                    <div className="messages" key="messages">
                        {showSpinner ? spinner : <></>}
                        {/* most recent AI message */}
                        {

                            data.length > 0 ?
                                <MessageOther
                                    // message={data.join("")}
                                    message={getRenderedMsg(data)}
                                    timestamp=""
                                    displayName="AI Tutor"
                                    avatarDisp={true}
                                    key="ai-msg"
                                />
                                : <></>
                        }
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
            history += "tutor: " + msg.message + "\n";
        } else {
            history += "student: " + msg.message + "\n";
        }
    }

    return history;
}

function getRenderedMsg(data: ChatResponseStream[]) {
    const tutorResponse = data[data.length - 1].tutor_response;
    const followUpQuestion = data[data.length - 1].follow_up_question;
    if (followUpQuestion !== '') {
        return tutorResponse + '\n\n' + followUpQuestion;
    } else {
        return tutorResponse;
    }
}

function updateMsgList(
    msg: string,
    role: string,
    msgData: Message[],
    existingMsgElems: React.JSX.Element[],
    setMsgs: (msgs: React.JSX.Element[]) => void,
    setRawMsgs: (msgs: Message[]) => void
): [React.JSX.Element[], Message[]] {

    const msgElem = role === "AI Tutor" ?
        (
            <MessageOther
                message={msg}
                timestamp=""
                displayName="AI Tutor"
                avatarDisp={true}
            />
        ) : (
            <MessageSelf
                message={msg}
                timestamp=""
                displayName="User"
                avatarDisp={false}
            />
        );

    msgData.push({
        type: role === "AI Tutor" ? 'bot' : 'user',
        message: msg
    });

    const newMsgElems = [
        msgElem,
        ...existingMsgElems
    ];

    setMsgs(
        newMsgElems
    );

    setRawMsgs(msgData);

    return [newMsgElems, msgData];
}