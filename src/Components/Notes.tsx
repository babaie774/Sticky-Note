import React from 'react'
import Note from './Note'


const Notes = (props: any) => {
    const note = props.noteList.map((note: any, index: number) => {
        return (
            <Note key={index} note={note} />
        )
    })
    return (
        <div>
            {note}
        </div>
    )
}

export default Notes