import React from 'react'
import Note from './Note'


const Stickynote = (props: any) => {
    const note = props.NoteList.map((note) => {
        return (
            <Notes NoteList={props.NoteList.Notes} />
        )
    })
    return (
        <div>
            {note}
        </div>
    )
}

export default Stickynote