import React from 'react'

const Note = (props: any) => {
    return (
        <div>
            <textarea
                defaultValue={props.note}
            ></textarea>
        </div>
    )
}

export default Note