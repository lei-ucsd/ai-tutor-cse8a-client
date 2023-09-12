import axios from 'axios';
import { mainURL, getResponseURL, ChatRequest, ChatResponse } from './index';


export async function getResponse(req: ChatRequest): Promise<ChatResponse | undefined> {
    // const {user, password, message, timestamp, history} = req;

    let url = `${mainURL}${getResponseURL}`;

    // let url = `${mainURL}${getResponseURL}?&user=${escapeHTML(user)}&password=${escapeHTML(password)}&message=${escapeHTML(message)}`;
    // if (timestamp) {
    //     url += `&timestamp=${timestamp}`;
    // }
    // if (history) {
    //     url += `&history=${escapeHTML(history)}`;
    // }

    // console.log(url)

    try {
        const response = await axios.post(url, {
            data : req, // {user: xxx, password: xxx, message: xxx, timestamp: xxx, history: xxx}
            headers: {
                // "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Methods, Access-Control-Allow-Origin",
            }
        });
        const data = JSON.parse(response.data);
        console.log(data)
        return data;

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