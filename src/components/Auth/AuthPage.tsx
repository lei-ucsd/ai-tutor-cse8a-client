import React, { useState } from "react"
import { TextField, Button, OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel } from "@mui/material"
import "./index.css"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type Props = {
    onLogin: () => void
}

export default function AuthPage({ onLogin }: Props) {
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

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

        onLogin();
    }

    return (
        <div className="auth">
            <p>
                Please login to access the CSE 8A interactive textbook.
            </p>
            <div className="form">
                <TextField
                    label="User"
                    variant="outlined"
                    required
                    onChange={(e) => setUserName(e.target.value)}
                    sx={{ m: 1, width: '20ch' }}
                />
                <FormControl sx={{ m: 1, width: '20ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        label="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button
                    sx={{ bgcolor: "var(--ifm-color-primary)", color: "white" }}
                    onClick={login}
                >Login</Button>
            </div>
        </div>
    )
}