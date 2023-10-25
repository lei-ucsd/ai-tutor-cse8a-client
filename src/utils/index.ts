import { ChatRequest, ChatResponse, Message, ChatResponseStream, ChatRequestStream } from "./data-model";
import { getResponse } from "./chat-utils";
import siteConfig from '@generated/docusaurus.config';

const LOCAL = Number(siteConfig.customFields.LOCAL as string);
const LOCAL_SERVER = siteConfig.customFields.LOCAL_SERVER as string;

// flag for using streaming vs not
// export const useStreaming = LOCAL && LOCAL_SERVER;
// TODO: refactor this out because we no longer use the non-streaming server backend
export const useStreaming = true;

// export const mainURL = useStreaming ? LOCAL_SERVER : 'https://gilpasternak35.pythonanywhere.com';
export const mainURL = LOCAL ? LOCAL_SERVER : 'https://lei.ucsd.edu:5445';
// TODO: update end points accordingly
// export const getResponseURL = useStreaming ? '/response' : '/';
export const getResponseURL = '/response';


export {ChatRequest, ChatResponse, ChatResponseStream, ChatRequestStream, Message, getResponse};