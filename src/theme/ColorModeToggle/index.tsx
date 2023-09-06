import React from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import { Button } from '@mui/material';
import { useCookies } from 'react-cookie';

export default function ColorModeToggleWrapper(props) {


    const [_, setCookie] = useCookies(['auth']);

    const logout = () => {
        window.location.reload();
        setCookie("auth", false);
    }


    return (
        <>
            <ColorModeToggle {...props} />
            <Button
                className="logoutBtn"
                sx={{ bgcolor: "var(--ifm-color-primary)", color: "white" }}
                onClick={() => logout()}
            >
                Logout
            </Button>
        </>
    );
}