import axios from 'axios';
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { useStreaming, mainURL, getResponseURL, ChatRequest, ChatResponse, ChatRequestStream, ChatResponseStream } from './index';
import untruncateJson from "untruncate-json";



export async function getResponse(
    req: ChatRequest,
    setData?: (value: React.SetStateAction<any[]>) => void)
    : Promise<any> {

    // TODO fix types

    let url = `${mainURL}${getResponseURL}`;

    console.log(url)

    // let url = `${mainURL}${getResponseURL}?&user=${escapeHTML(user)}&password=${escapeHTML(password)}&message=${escapeHTML(message)}`;
    // if (timestamp) {
    //     url += `&timestamp=${timestamp}`;
    // }
    // if (history) {
    //     url += `&history=${escapeHTML(history)}`;
    // }

    // console.log(url)

    try {

        if (useStreaming) {
            const { user: name, history: chat_history } = req;

            const chat_history_text = chat_history ?? '';
            // TODO: figure out how to add the last question
            const streamReq = { name, chat_history: chat_history_text, last_question: '' } as ChatRequestStream;

            console.log(streamReq);

            let response = "";
            let parsedResponse = undefined;

            const fetchPromise = new Promise((resolve, reject) => {

                (async () => {

                    await fetchEventSource(url, {
                        method: 'POST',
                        headers: {
                            Accept: "text/event-stream",
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(streamReq),
                        async onopen(res) {
                            if (res.status >= 400 && res.status < 500 && res.status !== 429) {
                                console.error("Client-side error ", res);
                                reject(res);
                            }
                        },
                        onmessage(ev) {
                            if (ev.data === "<END>") {
                                resolve(parsedResponse);
                                return;
                            }
                            response += ev.data;
                            parsedResponse = completeJSON(response);
                            // console.log("parsedResponse", parsedResponse);

                            setData((data) => [...data, parsedResponse]);
                        },
                        onerror(err) {
                            console.error(err)
                            reject(err);
                        },
                    });
                })();

            });


            // TODO fix types here (for error cases)
            const data = await fetchPromise;
            return data;


        } else {

            console.log(req);
            const response = await axios.post(url, {
                data: req, // {user: xxx, password: xxx, message: xxx, timestamp: xxx, history: xxx}
                headers: {
                    // "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,POST",
                    "Access-Control-Allow-Headers": "Access-Control-Allow-Methods, Access-Control-Allow-Origin",
                }
            });
            const data = JSON.parse(response.data);
            console.log(data)
            return data;
        }

    } catch (e) {
        console.error(e);
        alert('Error getting response from server');
        return undefined;
    }

}

export function escapeHTML(text: string) {
    if (!text) {
        console.error("No text given")
        return
    }
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\?/g, "&quest;")
        .replace(/\n/g, "__________")
        .replace(/ /g, "%20")
}

function completeJSON(incompleteJSON: string): ChatResponseStream {
    const jsonStr = untruncateJson(incompleteJSON);
    let res = undefined;
    try {
        res = JSON.parse(jsonStr);
    } catch (e) {
        console.warn('Error parsing JSON', e);
        res = {};
    }
    if (!('tutor_response' in res)) {
        res.tutor_response = '';
    }

    if (!('follow_up_question' in res)) {
        res.follow_up_question = '';
    }

    if (!('question_completed' in res)) {
        res.question_completed = false;
    }

    if (!('question_level' in res)) {
        res.question_level = '';
    }

    if (!('answer_is_correct' in res)) {
        res.answer_is_correct = false;
    }

    return res as ChatResponseStream;
}