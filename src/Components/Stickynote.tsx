import React from 'react'
import Notes from './Notes'
import NewSticky from './NewSticky'


const StickyNote = (props: any) => {
    return (
        <div>
            <Notes noteList={props.noteList} />
            <NewSticky />
        </div>
    )
}

export default StickyNote