import React, { useState } from 'react';
import AuthPage from '../components/Auth/AuthPage';
import { useCookies } from 'react-cookie';

// Default implementation, that you can customize
export default function Root({ children }) {
    const [cookies, setCookie] = useCookies(['auth']);

    const [userAuth, setUserAuth] = useState(cookies.auth ?? false);

    const today = new Date();

    const getExp = (date: Date) => {
        date.setDate(date.getDate() + 1);
        return date;
    }

    return (
        <React.Fragment>
            {userAuth ? (
                <>{children}</>
            ) : (
                <AuthPage onLogin={() => {
                    setUserAuth(true);
                    // setPage("chat")
                    setCookie("auth", true, {
                        expires: getExp(today)
                    });
                }} />
            )}
        </React.Fragment>
    );
}