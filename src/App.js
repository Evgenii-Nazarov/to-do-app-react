import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

function App() {

    const [noteList, setNoteList] = useState ([
        {noteName:'Note 1', _id: '123'},
        {noteName:'Note 2', _id: '234'},
        {noteName:'Note 3', _id: '345'},
        ]
    );

    const [newNote, setNewNote] = useState('');

    const addNewNoteHandler = (e) => {
        setNewNote(e.target.value)
    };

    const addNoteButtonHandler = () => {
        const newNoteList = [...noteList,
            { noteName: newNote,
                _id: Math.random()
            }];
        setNoteList(newNoteList);
        setNewNote('');
    };

    const deleteNoteButtonHandler = _id => {
         const newNoteList = noteList.filter(el => el._id !== _id);
         setNoteList(newNoteList);
    };

    const completeNoteButtonHandler = _id => {

    };

    return (
        <div className="container">
            <ul>
            {
                noteList.map(el => <div key={el._id}>

                    <li> {el.noteName}</li>
                    <Button variant="outline-primary" onClick={()=>completeNoteButtonHandler(el._id)}>complete</Button>
                    <Button onClick={()=>deleteNoteButtonHandler(el._id)}>delete</Button>
                    </div>
                )
            }
            </ul>
            <input type="text" value={newNote}  placeholder='input new note' onChange={addNewNoteHandler}/>
            <button onClick={addNoteButtonHandler}>add</button>
        </div>
  );
};

export default App;
