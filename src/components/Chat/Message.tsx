import React from "react";
import { Avatar } from "@mui/material";
import SmartToyIcon from '@mui/icons-material/SmartToy';

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
                    : <Avatar sx={{bgcolor: "transparent"}}/>}
                <div>
                    {avatarDisp ? <div className="displayName">{displayName}</div> : <></>}
                    <div className="messageBlue">
                        <div>
                            <p className="messageContent">{message}</p>
                        </div>
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
                <p className="messageContent">{message}</p>
                <div className="messageTimeStampRight">{timestamp}</div>
            </div>
        </div>
    );
};