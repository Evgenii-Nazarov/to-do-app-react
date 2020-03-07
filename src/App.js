import React, {useState} from 'react';
import './App.css';
import Note from "./Note";

function App() {


    const [noteList, setNoteList] = useState([
            {noteName: 'Note 1', _id: '123', isDone: false},
            {noteName: 'Note 2', _id: '234', isDone: false},
            {noteName: 'Note 3', _id: '345', isDone: false},
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
    };
    const movingDown = _id => {
        let index = noteList.findIndex(e => e._id === _id);
        let el = noteList[index];
        let newNoteList = [...noteList];
        newNoteList[index] = noteList[index + 1];
        newNoteList[index + 1] = el;
        setNoteList(newNoteList);
    };

    const doneButtonHandler = (_id) => {
        const newNoteList = noteList.map(el => {
            if (el._id === _id) return {...el, isDone: true};
            return el
        });
        setNoteList(newNoteList)
    };
    const doAgainButtonHandler = (_id) => {
        const newNoteList = noteList.map(el => {
            if (el._id === _id) return {...el, isDone: false};
            return el
        });
        setNoteList(newNoteList)
    };
    const updateNoteButtonHandler = (_id,note) => {
        const newNoteList = noteList.map(el => {
            if (el._id === _id) return {...el, noteName: note};
            return el
        });
        setNoteList(newNoteList)
    };

    return (
        <div className='container'>
            <h3>Note app</h3>
            {
                noteList.map((el, i) => <Note _id={el._id}
                                              key={el._id}
                                              name={el.noteName}
                                              isNoteDone={el.isDone}
                                              remove={deleteNoteButtonHandler}
                                              movingUp={movingUp}
                                              movingDown={movingDown}
                                              number={i}
                                              listLength={noteList.length}
                                              doneButtonHandler={doneButtonHandler}
                                              doAgainButtonHandler={doAgainButtonHandler}
                                              updateNoteButtonHandler={updateNoteButtonHandler}
                />)
            }
            <input type="text" value={newNote} placeholder='input new note' onChange={addNewNoteHandler}/>
            <button className="btn btn-primary" onClick={addNoteButtonHandler}>add</button>
        </div>
    )
}

export default App;
