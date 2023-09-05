import React, { useState } from 'react';
import Layout from '@theme/Layout';
import ChatInterface from '../components/Chat/ChatInterface';
import AuthPage from '../components/Auth/AuthPage';

export default function Tutor() {

    const [page, setPage] = useState("auth")

    return (
        <Layout title="Tutor" description="Tutor Page">
            {
                page === "chat" ?
                    <ChatInterface />
                    :
                    <AuthPage onLogin={() => setPage("chat")} />
            }
        </Layout>
    )
}