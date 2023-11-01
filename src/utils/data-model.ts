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

export type ChatRequestStream = {
    name: string,
    chat_history?: string,
    last_question?: string,
    include_prefix: boolean
}

export type ChatResponse = {
    message: string,
    timestamp: number
}

export type ChatResponseStream = {
    tutor_response: string,
    follow_up_question: string,
    question_completed: boolean,
    question_level: string,
    answer_is_correct: boolean
}

export type Message = {
    type: 'user' | 'bot',
    message: string,
}
