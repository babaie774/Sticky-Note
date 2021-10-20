import React from 'react'
import Stickynote from './Components/Stickynote'

const NoteList = {
    Notes: [
        'hi',
        'hello'
    ]
}
const App: React.FC = (NoteList) => {
    return (
        <div>
            <Stickynote NoteList={NoteList} />
        </div>
    )
}

export default App