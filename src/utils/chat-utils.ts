import axios from 'axios';
import { mainURL, getResponseURL, ChatRequest, ChatResponse } from './index';


export async function getResponse(req: ChatRequest): Promise<ChatResponse | undefined> {
    const url = `${mainURL}${getResponseURL}`;

    try {
        const response = await axios.post(url, {
            data: req,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST",
                // "Access-Control-Allow-Headers": "Access-Control-Allow-Methods"
                    // "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Origin, Authorization, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
            },
        });
        return JSON.parse(response.data);

    } catch (e) {
        console.error(e);
        alert('Error getting response from server');
        return undefined;
    }

}