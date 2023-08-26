import "./index.css";
import React from "react";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput";
import { MessageOther, MessageSelf } from "./Message";

export default function ChatInterface() {
    return (
        <div className="chatContainer">
            <Paper className="paper">
                <Paper id="style-1" className="messagesBody">
                    <MessageOther
                        message="Welcome to Chat! Welcome to Chat! Welcome to Chat! Welcome to Chat! Welcome to Chat! Welcome to Chat! "
                        timestamp="MM/DD 00:00"
                        displayName="AI Tutor (Fake)"
                        avatarDisp={true}
                    />
                    <MessageOther
                        message="I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. I am a fake AI tutor. "
                        timestamp="MM/DD 00:00"
                        photoURL=""
                        displayName="AI Tutor (Fake)"
                        avatarDisp={false}
                    />
                    <MessageSelf
                        message="Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. Hello, fake AI tutor. "
                        timestamp="MM/DD 00:00"
                        photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        displayName="User (Fake)"
                        avatarDisp={true}
                    />
                    <MessageSelf
                        message="I am a fake human user. I am a fake human user. I am a fake human user. I am a fake human user. I am a fake human user. I am a fake human user. "
                        timestamp="MM/DD 00:00"
                        photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        displayName="User (Fake)"
                        avatarDisp={false}
                    />
                </Paper>
                <TextInput />
            </Paper>
        </div>
    )
}