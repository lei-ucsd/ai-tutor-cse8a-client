import { ChatRequest, ChatResponse, Message } from "./data-model";
import { getResponse } from "./chat-utils";
import siteConfig from '@generated/docusaurus.config';

const LOCAL = Number(siteConfig.customFields.LOCAL as string);
const LOCAL_SERVER = siteConfig.customFields.LOCAL_SERVER as string;

const local = LOCAL && LOCAL_SERVER;

console.log(LOCAL, LOCAL_SERVER)

export const mainURL = local ? LOCAL_SERVER : 'https://gilpasternak35.pythonanywhere.com';
// TODO: update end points accordingly
export const getResponseURL = local ? '/response' : '/';

export {ChatRequest, ChatResponse, Message, getResponse};