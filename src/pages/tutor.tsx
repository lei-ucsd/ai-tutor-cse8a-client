import React, { useState } from 'react';
import Layout from '@theme/Layout';
import ChatInterface from '../components/Chat/ChatInterface';


export default function Tutor() {

    return (
        <Layout title="Tutor" description="Tutor Page">
            {
                <ChatInterface />
            }
        </Layout>
    )
}

// compute a Date object that represents seven days from now
