import { fetchEventSource } from '@microsoft/fetch-event-source';
import { mainURL, getResponseURL, getQuestionURL, ChatRequest, ChatRequestStream, ChatResponseStream } from './index';
import untruncateJson from "untruncate-json";
import { QuestionRequestStream } from './data-model';

const responseKeys = [
    'tutor_response',
    'follow_up_question',
    'question_completed',
    'question_level',
    'answer_is_correct'
];

/**
 * Sends a request to the server for obtaining a question at the specified bloom's level.
 * @param req Request to be sent to the server for obtaining a question at the specified bloom's level.
 * @returns a Promise that, when resolved, returns a string containing the generated question.
 */
export async function getQuestion(
    req: QuestionRequestStream,
): Promise<any> {
    const url = `${mainURL}${getQuestionURL}`;

    try {
        let response = "";
        const fetchPromise = new Promise((resolve, reject) => {
            (async () => {

                await fetchEventSource(url, {
                    method: 'POST',
                    headers: {
                        Accept: "text/event-stream",
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(req),
                    async onopen(res) {
                        if (res.status >= 400 && res.status < 500 && res.status !== 429) {
                            console.error("Client-side error ", res);
                            reject(res);
                        }
                    },
                    onmessage(ev) {
                        if (ev.data === "<END>") {
                            response = response.replace(/<SLASH>n/g, '\n');
                            console.log(response);
                            resolve(response);
                            return;
                        }
                        response += ev.data
                    },
                    onerror(err) {
                        console.error(err)
                        reject(err);
                    },
                });

            })();
        });

        const data = await fetchPromise;
        return data;

    } catch (e) {
        console.error(e);
        alert('Error getting response from server');
        return undefined;
    }
}


/**
 * Sends a request to the server for obtaining an AI response.
 * @param req Request to be sent to the server for obtaining an AI response.
 * @param lastQuestion An optional string that specifies the last question the AI asked the user.
 * @param setData An optional function that sets the state of the data to be displayed in the chat window.
 * @returns A promise that, when resolved, returns a ChatResponseStream object containing the AI's response.
 */
export async function getResponse(
    req: ChatRequest,
    lastQuestion?: string,
    setData?: (value: React.SetStateAction<any[]>) => void)
    : Promise<ChatResponseStream> {

    let url = `${mainURL}${getResponseURL}`;

    try {

        const { user: name, history: chat_history } = req;

        const chat_history_text = chat_history ?? '';
        const streamReq = { name, chat_history: chat_history_text, last_question: lastQuestion, include_prefix: true } as ChatRequestStream;

        console.log(streamReq);

        let response = "";
        let parsedResponse = undefined;

        const fetchPromise: Promise<ChatResponseStream> = new Promise((resolve, reject) => {

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
                            console.log(parsedResponse);
                            resolve(parsedResponse);
                            return;
                        }
                        response += ev.data.replace(/<SLASH>/g, '\\');
                        parsedResponse = completeJSON(response, responseKeys);

                        setData((data) => [...data, parsedResponse]);
                    },
                    onerror(err) {
                        console.error(err)
                        reject(err);
                    },
                });
            })();

        });


        const data = await fetchPromise;
        return data;


    } catch (e) {
        console.error(e);
        alert('Error getting response from server');
        return undefined;
    }

}


/**
 * Autocompletes a JSON string with default values for the keys specified in defaultValues.
 * @param incompleteJSON The possibly incomplete JSON string to be autocompleted streamed from the server.
 * @param defaultValues A set of keys to be written into the JSON string if they are not already present.
 * @returns a completed JSON object, specifically in the format of a ChatResponseStream object.
 */
function completeJSON(incompleteJSON: string, defaultValues: string[]): ChatResponseStream {
    const jsonStr = untruncateJson(incompleteJSON);
    let res = undefined;
    try {
        res = JSON.parse(jsonStr);
    } catch (e) {
        console.warn('Error parsing JSON', e);
        res = {};
    }

    for (const key of defaultValues) {
        if (!(key in res)) {
            res[key] = '';
        }
    }

    return res as ChatResponseStream;
}