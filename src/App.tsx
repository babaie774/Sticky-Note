import React from 'react'
import StickyNote from './Components/StickyNote'


const App: React.FC = () => {

    const noteList = {
        notes: [
            'hi',
            'hello'
        ]
    }

    console.log(noteList) //undefined
    return (
        <div>
            <StickyNote noteList={noteList} />
        </div>
    )
}

export default App