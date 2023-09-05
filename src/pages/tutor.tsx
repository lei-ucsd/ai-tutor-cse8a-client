import React, { useState } from 'react';
import Layout from '@theme/Layout';
import ChatInterface from '../components/Chat/ChatInterface';
import AuthPage from '../components/Auth/AuthPage';
import { useCookies } from 'react-cookie';


export default function Tutor() {

    const [cookies, setCookie] = useCookies(['page']);

    const [page, setPage] = useState(cookies.page ?? "auth")

    const today = new Date();

    const getExp = (date: Date) => {
        date.setDate(date.getDate() + 7);
        console.log(date)
        return date;
    }

    return (
        <Layout title="Tutor" description="Tutor Page">
            {
                page === "chat" ?
                    <ChatInterface />
                    :
                    <AuthPage onLogin={() => {
                        setPage("chat")
                        setCookie("page", "chat", {
                            expires: getExp(today)
                        });
                    }} />
            }
        </Layout>
    )
}

// compute a Date object that represents seven days from now
