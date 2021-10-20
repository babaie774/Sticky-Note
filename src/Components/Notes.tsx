import React from 'react'
import Note from './Note'


const Notes = (props: any) => {
    console.log(props.noteList.notes)
    const note = props.noteList.notes.map((note: any) => {
        return (
            <Note note={note} />
        )
    })
    return (
        <div>
            {note}
        </div>
    )
}

export default Notes