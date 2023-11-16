import { ChatRequest, ChatResponse, Message, ChatResponseStream, ChatRequestStream } from "./data-model";
import { getResponse } from "./chat-utils";
import siteConfig from '@generated/docusaurus.config';

export const LOCAL = Number(siteConfig.customFields.LOCAL as string);
const LOCAL_SERVER = siteConfig.customFields.LOCAL_SERVER as string;

// flag for using streaming vs not

export const mainURL = LOCAL ? LOCAL_SERVER : 'https://lei.ucsd.edu:5445';
export const getResponseURL = '/response';
export const getQuestionURL = '/question';


export {ChatRequest, ChatResponse, ChatResponseStream, ChatRequestStream, Message, getResponse};