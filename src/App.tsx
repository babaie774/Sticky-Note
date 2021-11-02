import React, { useState } from 'react'
import StickyNote from './Components/Stickynote'


const App: React.FC = () => {
    const initNoteList = {
        notes: [
            ""
        ]
    }


    const [noteList, preNoteList] = useState<any>(initNoteList.notes)

    const addNewNote: any = () => {
        preNoteList((PrevState: any) => ([...PrevState, ""]))
    }


    return (
        <React.Fragment>
            <StickyNote addNewNote={addNewNote} noteList={noteList} />
        </React.Fragment>
    )
}


export default App