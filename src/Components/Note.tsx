import React from 'react'

const Note = (props: any) => {
    return (
        <div>
            <textarea>{props.note}</textarea>
        </div>
    )
}

export default Note