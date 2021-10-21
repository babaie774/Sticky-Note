import React from 'react'

const NewSticky = (props: any) => {
    return (
        <div>
            <div onClick={() => { props.addNote() }} id="create">+</div>
        </div>
    )
}

export default NewSticky