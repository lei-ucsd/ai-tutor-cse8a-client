import { ChatRequest, ChatResponse, Message } from "./data-model";
import { getResponse } from "./chat-utils";

export const mainURL = 'https://gilpasternak35.pythonanywhere.com';
// export const getResponseURL = '/get-response';
export const getResponseURL = '/';

export {ChatRequest, ChatResponse, Message, getResponse};