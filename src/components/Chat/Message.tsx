import React from "react";
import { Avatar } from "@mui/material";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'


export function MessageOther(props) {
    const message = props.message ? props.message : "no message";
    const timestamp = props.timestamp ? props.timestamp : "";
    const photoURL = props.photoURL;
    const displayName = props.displayName ? props.displayName : "no name";
    const avatarDisp = props.avatarDisp ?? false;
    return (
        <>
            <div className="messageRow">
                {avatarDisp ?
                    <Avatar
                        alt={displayName}
                        src={photoURL ?? ''}
                    >
                        {!photoURL ? <SmartToyIcon /> : <></>}
                    </Avatar>
                    : <Avatar sx={{ bgcolor: "transparent" }} />}
                <div>
                    {avatarDisp ? <div className="displayName">{displayName}</div> : <></>}
                    <div className="messageBlue">
                        <MarkdownWithCodeHighlighted message={message} />
                        <div className="messageTimeStampRight">{timestamp}</div>
                    </div>
                </div>
            </div>
        </>
    );
};


export function MessageSelf(props) {
    const message = props.message ? props.message : "no message";
    const timestamp = props.timestamp ? props.timestamp : "";
    return (
        <div className="messageRowRight">
            <div className="messageOrange">
                <MarkdownWithCodeHighlighted message={message} />
                <div className="messageTimeStampRight">{timestamp}</div>
            </div>
        </div>
    );
};


export function MarkdownWithCodeHighlighted({ message }: { message: string }) {
    return (
        <ReactMarkdown
            children={message}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            {...props}
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            PreTag="div"
                        />
                    ) : (
                        <code {...props} className={className}>
                            {children}
                        </code>
                    )
                }
            }}
        />
    )
}