import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { Editable, useEditor } from "@wysimark/react"


type PropType = {
    id: string,
    className: string,
    value: string,
    onChange: (value: string) => void
}

export default function TextEditor({ id, className, value, onChange }: PropType) {
    const editor = useEditor({ maxHeight: 200 });

    return (
        // TODO: auto switching between light and dark mode based on site settings
        // TODO: styling
        <div
            id={id}
            className={`container ${className}`}
            data-color-mode="light"
            style={{
                margin: '1vh 0px',
                maxWidth: '100%',
            }}>
            {/* <MDEditor
                value={value}
                onChange={onChange}
            /> */}
            {/* <Editable
                editor={editor}
                value={value}
                onChange={onChange}
                throttleInMs={200}
            /> */}


        </div>
    )
}