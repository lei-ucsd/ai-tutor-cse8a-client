import "./index.css";
import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput";
import { MessageOther, MessageSelf } from "./Message";
import { useState } from "react";
import LoadingSpinner from "../UtilElements/LoadingSpinner";
import { ChatRequest, ChatRequestStream, ChatResponseStream, getResponse, Message, useStreaming } from "@site/src/utils";
import { QuestionRequestStream } from "@site/src/utils/data-model";
import { getQuestion } from "@site/src/utils/chat-utils";


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
const bloomsTaxonomy = ['remember', 'understand', 'apply', 'analyze'];


// hard coded threshold for all steps
const THRESHOLD = 1;

export default function ChatInterface() {

    const [questionLevel, setQuestionLevel] = useState(undefined);

    const [lastQuestion, setLastQuestion] = useState(undefined);

    const [rawMsgs, setRawMsgs] = useState(initRawMsgs);

    const [msgs, setMsgs] = useState(initMsgs);

    const [rawResponseData, setRawResponseData] = useState([]);

    const [rawQuestionData, setRawQuestionData] = useState(undefined);

    const [correctSoFar, setCorrectSoFar] = useState(0);

    useEffect(() => {
        getInitQuestionByLevel(bloomsTaxonomy)
            .then((res) => {
                setRawQuestionData(res);
            });

    }, []);

    // when one question at a level is used, grab one new question for that level
    useEffect(() => {
        if (lastQuestion && lastQuestion.length > 0) {
            getNewQuestionByLevel(questionLevel, rawQuestionData[questionLevel])
                .then((res) => {
                    const newRawQuestionData = {
                        ...rawQuestionData
                    };
                    newRawQuestionData[questionLevel].push(res);
                    setRawQuestionData(newRawQuestionData);
                });
        }
    }, [lastQuestion]);

    // show a new question when a new level is reached, or when a question at a given level is completed
    useEffect(() => {
        const question = getQuestionToShow(questionLevel, rawQuestionData);
        if (question && correctSoFar < THRESHOLD) {
            console.log('question: ', question);
            // TODO: typewriter effect?

            // final rendering and setting states
            const _ = updateMsgList(question, 'AI Tutor', rawMsgs, msgs, setMsgs, setRawMsgs);

            setLastQuestion(question);
        }
    }, [questionLevel, correctSoFar]);


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
            threshold: THRESHOLD,
        }

        // TODO refactor out
        if (questionLevel) {
            req.current_step = questionLevel;
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

            getResponse(req, lastQuestion ?? '', setRawResponseData)
                .then((res) => {
                    if ('tutor_response' in res && res.tutor_response !== '') {
                        const msg = renderTutorResponse(res.tutor_response, res.follow_up_question, res.question_completed, questionLevel);
                        console.log("msg: ", msg)

                        const [msgElems, msgData] = updateMsgList(msg, 'AI Tutor', newMsgs, newRenderedMsgs, setMsgs, setRawMsgs);

                        setRawResponseData([]);


                        let newCorrectSoFar = correctSoFar;

                        // track correctness if current question is completed
                        // then the useEffect hook will show the next question on the level if threshold has not been met
                        if (questionLevel && res.question_completed === "true") {
                            newCorrectSoFar += 1;
                            setCorrectSoFar(newCorrectSoFar);
                        }

                        // update current level if correctSoFar reaches threashold
                        if (newCorrectSoFar === THRESHOLD) {
                            const idxCurrent = bloomsTaxonomy.indexOf(questionLevel);
                            const idxNew = idxCurrent + 1;
                            if (questionLevel === 'analyze' || idxNew === bloomsTaxonomy.length) {
                                // the backend only reasonably supports steps up to `analyze`; 
                                // however, user might reach `create` if their first question is determined to be at that level
                                // we should end the conversation whenever (1) the step naturally reaches beyond 'analyze' or (2) the user finishes 'create'

                                // TODO backend support?
                                const msg = 'Congratulations! You have successfully completed reviewing the concept! Would you like to review another concept?';
                                const _ = updateMsgList(msg, 'AI Tutor', msgData, msgElems, setMsgs, setRawMsgs);

                                // reset question level
                                setQuestionLevel(undefined);
                            } else {
                                // the useEffect hook will automatically show a new question at the new level 
                                const idx = bloomsTaxonomy.indexOf(questionLevel);
                                const newStep = bloomsTaxonomy[idx + 1];
                                setQuestionLevel(newStep);
                                setCorrectSoFar(0);
                            }
                        }

                        // only initialize question Level if it is not set yet;
                        if (!questionLevel && res.question_level !== "") {
                            setQuestionLevel(res.question_level);
                        }
                    } else {
                        alert('No tutor response received. Please try again.')
                    }

                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            alert("Only streaming mode is supported at the moment.")
        }

    }



    return (
        <div className="chatContainer" key="chat-container">
            <Paper className="paper" elevation={0}>
                <Paper id="style-1" className="messagesBody" key="messages-body">
                    <div className="messages" key="messages">
                        {/* most recent AI message */}
                        {/* TODO: might want to delay showing question until response is done */}
                        {

                            rawResponseData.length > 0 ?
                                <MessageOther
                                    message={getRenderedResponse(rawResponseData, questionLevel)}
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
                {
                    rawQuestionData ?
                        <TextInput onAddMsg={addMsg} /> :
                        <h3>Initializing the chat. Please wait...</h3>
                }
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

function getRenderedResponse(data: ChatResponseStream[], questionLevel: string | undefined) {
    const tutorResponse = data[data.length - 1].tutor_response;
    // const followUpQuestion = data[data.length - 1].follow_up_question;
    // const questionCompleted = data[data.length - 1].question_completed;
    // return renderTutorResponse(tutorResponse, followUpQuestion, questionCompleted, questionLevel);
    return tutorResponse;
}


function renderTutorResponse(tutorResponse: string, followUpQuestion: string, questionCompleted: string, questionLevel: string | undefined) {
    if (followUpQuestion !== '' && questionCompleted === 'false' && questionLevel) {
        return tutorResponse + '\n\n' + followUpQuestion;
    } else {
        return tutorResponse;
    }
}

function getQuestionToShow(questionLevel: string | undefined, rawQuestionData: { [key: string]: string[] } | undefined) {
    // do not show question when there are no initial questions or no questions at a given level
    console.log(rawQuestionData, questionLevel);
    if (!rawQuestionData || !questionLevel || !(questionLevel in rawQuestionData) || rawQuestionData[questionLevel].length === 0) {
        return undefined;
    }

    // show the most recent question at a given level
    const questions = rawQuestionData[questionLevel];
    return questions[questions.length - 1];
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

async function getInitQuestionByLevel(taxonomy: string[]) {
    const res = {}
    const questions = await Promise.all(
        taxonomy.map(async (level) => {
            const questionReq: QuestionRequestStream = {
                bloom_level: level,
                previous_questions: [],
                include_prefix: true
            }
            return await getQuestion(questionReq);
        })
    );

    for (let i = 0; i < taxonomy.length; i++) {
        const level = taxonomy[i];
        res[level] = [questions[i]];
    }

    return res;
}

async function getNewQuestionByLevel(level: string, previousQuestions: string[]) {
    const questionReq: QuestionRequestStream = {
        bloom_level: level,
        previous_questions: previousQuestions,
        include_prefix: true
    }
    return await getQuestion(questionReq);
}
