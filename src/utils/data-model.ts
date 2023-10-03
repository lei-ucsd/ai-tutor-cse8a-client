export type ChatRequest = {
    user: string,
    password: string,
    message: string,
    timestamp?: number,
    history?: string,
    current_step?: string,
    correctSoFar?: number,
    threshold?: number,
    questions?: string
}

export type ChatResponse = {
    message: string,
    timestamp: number
}

export type Message = {
    type: 'user' | 'bot',
    message: string,
}
