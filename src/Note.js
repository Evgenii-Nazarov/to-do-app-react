import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Note(props) {

    const [isUpdateButtonClicked, setIsUpdateButtonClicked] = useState(false);
    const [updatedNote, setUpdatedNote] = useState('');


    const updateButtonHandler = () => {
        setIsUpdateButtonClicked(true)
    };

    const updateNoteHandler = (e) => {
        setUpdatedNote(e.target.value);
    };

    const updateNoteButtonHandler = (_id,updatedNote) => {

        setIsUpdateButtonClicked(false);
        setUpdatedNote('');
        props.updateNoteButtonHandler(_id,updatedNote)
    };

    const updateNoteCancelButtonHandler = () => {
        setIsUpdateButtonClicked(false);
        setUpdatedNote('');
    };

    return (
        <div className='note'>
            <Card style={{width: '35rem'}}>
                <div className='row'>
                    <div className='col'>

                        <div className='col'>
                            <Button variant="outline-primary" size="sm" disabled={!(props.number)}
                                    onClick={() => props.movingUp(props._id)}>↑</Button>
                        </div>
                        <div className='col'>
                            <Button variant="outline-primary" size="sm"
                                    disabled={!(props.listLength - props.number - 1)}
                                    onClick={() => props.movingDown(props._id)}>↓</Button>
                        </div>

                    </div>
                    <div className='col'>
                        <li> {props.name}</li>
                    </div>
                    {(!isUpdateButtonClicked) ?
                        <div className='col'>
                            <ButtonGroup aria-label="Basic example">
                                {
                                    (!props.isNoteDone) ?

                                        <Button variant='outline-success'
                                                onClick={() => props.doneButtonHandler(props._id)}>Complete</Button>
                                        :
                                        <Button variant='outline-warning'
                                                onClick={() => props.doAgainButtonHandler(props._id)}>Undone</Button>

                                }

                                <Button variant='outline-primary' onClick={() => updateButtonHandler()}>update</Button>

                                <Button variant='outline-danger' onClick={() => props.remove(props._id,props.name)}>delete</Button>

                            </ButtonGroup>
                        </div>
                        :
                        <div className='col'>
                            <input type="text" value={updatedNote} placeholder='input updated note'
                                   onChange={updateNoteHandler}/>
                            <Button variant='outline-warning' onClick={() => updateNoteButtonHandler(props._id,updatedNote)}>update</Button>
                            <Button variant='outline-danger' onClick={() => updateNoteCancelButtonHandler()}>cancel</Button>
                        </div>
                    }

                </div>
            </Card>
        </div>
    );
}

export default Note;
