import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Navbar from '../components/Navbar'
import { mainContext } from '../contexts/MainContext';

const Update = () => {
    const { getOneTodo, oneTodo, saveEditedTodo } = useContext(mainContext)
    const params = useParams();
    const [todoEdit, setTodoEdit] = useState(oneTodo)


    useEffect(() => {
        setTodoEdit(oneTodo)
    }, [oneTodo]);

    useEffect(() => {
        getOneTodo(params.docId);
    }, [])

    function handleChange(e) {
        let obj = {
            ...todoEdit,
            todo: {
                ...todoEdit.todo,
                title: e.target.value,
            }
        }
        setTodoEdit(obj);
    }

    const history = useHistory()
    function handleClick() {
        saveEditedTodo(todoEdit, params.docId);
        history.push("/");
    }

    return (
        <div>
            <Navbar />
            <div>
                {
                    todoEdit ? (
                        <>
                            <input
                                onChange={handleChange}
                                type="text"
                                value={todoEdit.todo.title}
                            />
                            <button onClick={handleClick}>Save</button>
                        </>

                    ) : (null)
                }
            </div>
        </div>
    );
};

export default Update;