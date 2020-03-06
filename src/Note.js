import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

function Note(props) {

    const [isDoneButtonActive, setIsDoneButtonActive] = useState(true)
    const doneButtonHandler = () => {

        setIsDoneButtonActive(false)
    };
    const doAgainButtonHandler = () => {

        setIsDoneButtonActive(true)
    };

    return (
        <div className='note'>
            <Card style={{width: '25rem'}}>
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
                    {
                        (isDoneButtonActive) ?
                            <div className='col'>
                                <Button variant='outline-success' onClick={() => doneButtonHandler()}>Complete</Button>
                            </div> :

                            <div className='col'>
                                <Button variant='outline-warning' onClick={() => doAgainButtonHandler()}>Do
                                    again</Button>
                            </div>
                    }
                    <div className='col'>
                        <Button variant='outline-danger' onClick={() => props.remove(props._id)}>delete</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Note;
