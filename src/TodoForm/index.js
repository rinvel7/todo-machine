import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';


function TodoForm(){
    const [newTodoValue, SetNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (e) => {
        SetNewTodoValue(e.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        SetNewTodoValue('')
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Cortar la cebolla"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                    Cancelar
                </button>
                       
                <button
                type="onSubmit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Anadir
                </button>
            </div>


        </form>
    )

}

export { TodoForm }