import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import * as s from './style';
import Button from '@material-ui/core/Button';
import Draggable from 'react-draggable';

export function TaskModal(props) {
    const [task, setTask] = useState({});
    if(task.title === undefined ){
        setTask(props.task)
    }
    const handleChange = event => {
        task.title = event.target.value;
    }
    
    const submitForm = e => {
        e.preventDefault();
        props.setOpenModal(false)
        props.editTaskModal(task, task.title)
    }
    return (
        <> 
        { props.open &&
            <s.Opacity>
                <s.Draggable>
                    <s.Modal>
                        <Draggable
                        handle=".header"
                        >
                            <s.Modal.span
                            style={{
                                opacity: `${(props.open ? 1 : 0)}`
                            }}
                            >
                            <div className="header">

                            </div>
                            {
                                task.title !== null &&
                                <form 
                                onSubmit={e => submitForm(e)}
                                noValidate autoComplete="off">
                                <TextField
                                onChange={handleChange}
                                style={{
                                    width: `100%`
                                }}
                                label="Adicionar título" />
                                <div className="bottom">
                                <Button 
                                onClick={() => props.setOpenModal(false)}
                                variant="contained" color="primary">
                                    Salvar
                                </Button>
                                </div>
                                </form>
                            }
                            </s.Modal.span>
                        </Draggable>
                    </s.Modal>
                </s.Draggable>
            </s.Opacity>
        }
        </>
    )
}