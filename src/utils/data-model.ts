export type ChatRequest = {
    user: string,
    password: string,
    message: string,
    timestamp?: number,
}

export type ChatResponse = {
    message: string,
    timestamp: number
}