import React from 'react'

const Note = (props) => {
    return (
        <div>
            <textarea>{props.text}</textarea>
        </div>
    )
}

export default Note