import React, { useState } from "react"
import { TextField, Button } from "@mui/material"
import "./index.css"
import { PropTypes } from "@mui/material"

type Props = {
    onLogin: () => void
}

export default function AuthPage({ onLogin }: Props) {
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)

    const login = () => {
        if (userName === null) {
            alert("Please enter username.");
            return;
        }

        if (password === null) {
            alert("Please enter password.");
            return;
        }

        if (userName !== "bob" || password !== "lei") {
            alert("Wrong username or password.");
            return;
        }

        // TODO: check auth credentials with server
        // TODO: config cookies

        onLogin();
    }

    return (
        <div className="auth">
            <p>
                Please login to access the tutor page.
            </p>
            <div className="form">
                <TextField label="User" variant="outlined" required onChange={(e) => setUserName(e.target.value)} />
                <TextField label="Password" variant="outlined" required onChange={(e) => setPassword(e.target.value)} />
                <Button
                    sx={{ bgcolor: "var(--ifm-color-primary)", color: "white" }}
                    onClick={login}
                >Login</Button>
            </div>
        </div>
    )
}