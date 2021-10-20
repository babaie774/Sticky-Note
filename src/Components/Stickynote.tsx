import React from 'react'
import Notes from './Notes'
import NewSticky from './NewSticky'


const Stickynote = (props: any) => {
    return (
        <div>
            <Notes NoteList={props.NoteList.Notes} />
            <NewSticky />
        </div>
    )
}

export default Stickynote