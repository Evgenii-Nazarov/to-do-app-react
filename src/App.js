import React, {useState} from 'react';
import './App.css';
import Note from "./Note";

function App() {



    const [noteList, setNoteList] = useState([
            {noteName: 'Note 1', _id: '123'},
            {noteName: 'Note 2', _id: '234'},
            {noteName: 'Note 3', _id: '345'},
        ]
    );
    const [newNote, setNewNote] = useState('');

    const addNewNoteHandler = (e) => {
        setNewNote(e.target.value)
    };

    const addNoteButtonHandler = () => {
        const newNoteList = [...noteList,
            {
                noteName: newNote,
                _id: Math.random()
            }];
        setNoteList(newNoteList);
        setNewNote('');
    };

    const deleteNoteButtonHandler = _id => {
        const newNoteList = noteList.filter(el => el._id !== _id);
        setNoteList(newNoteList);
    };

    const movingUp = _id => {
        let index = noteList.findIndex(e => e._id === _id);
        let el = noteList[index];
        let newNoteList = [...noteList];
        newNoteList[index] = noteList[index - 1];
        newNoteList[index - 1] = el;
        setNoteList(newNoteList);
    }
    const movingDown = _id => {
        let index = noteList.findIndex(e => e._id === _id);
        let el = noteList[index];
        let newNoteList = [...noteList];
        newNoteList[index] = noteList[index + 1];
        newNoteList[index + 1] = el;
        setNoteList(newNoteList);
    }

    return (
        <div className='container'>
            {
                noteList.map((el,i) => <Note _id={el._id}
                                             name={el.noteName}
                                             remove={deleteNoteButtonHandler}
                                             movingUp={movingUp}
                                             movingDown={movingDown}
                                             number={i}
                                             listLength={noteList.length}
                />)
            }
            <input type="text" value={newNote} placeholder='input new note' onChange={addNewNoteHandler}/>
            <button className="btn btn-primary" onClick={addNoteButtonHandler}>add</button>
        </div>
    )
}

export default App;
