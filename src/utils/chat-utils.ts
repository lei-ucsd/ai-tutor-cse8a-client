import axios from 'axios';
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { useStreaming, mainURL, getResponseURL, ChatRequest, ChatResponse } from './index';
import { ChatRequestStream } from './data-model';


export async function getResponse(req: ChatRequest): Promise<ChatResponse | undefined> {

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

            await fetchEventSource(url, {
                method: 'POST',
                headers: {
                    Accept: "text/event-stream",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(streamReq),
                async onopen(res) {
                    if (res.ok && res.status === 200) {
                        console.log("Connection made ", res);
                    } else if (res.status >= 400 && res.status < 500 && res.status !== 429) {
                        console.log("Client-side error ", res);
                    }
                },
                onmessage(ev) {
                    console.log(ev.data);
                    const parsedData = JSON.parse(ev.data);
                }
            });


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