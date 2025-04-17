// src/App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../../features/todos/todoSlice';
import { FaBan, FaFileCircleCheck, FaListCheck, FaTrashCan } from 'react-icons/fa6';
import "./ToDoList.css"
function ToDoList() {
    const [text, setText] = useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h1 className='title-check'><FaFileCircleCheck /> To-do List</h1>

            <div style={{ marginBottom: '20px' }}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Nhập công việc..."
                    style={{ padding: '8px', fontSize: '16px', width: '70%' }}
                />
                <button
                    onClick={handleAdd}
                    style={{
                        marginLeft: '10px',
                        padding: '8px 12px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        background: 'rgb(176, 33, 81)',
                        color: 'rgb(247, 245, 245)',
                        border: 'none',

                    }}
                >
                    Thêm
                </button>
            </div>

            {todos.length === 0 ? (
                <p className='title-list'><FaBan /> Không có công việc nào.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {todos.map(todo => (
                        <li
                            key={todo.id}
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                                marginBottom: '10px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                borderRadius: '6px'
                            }}
                        >
                            <span>{todo.text}</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(removeTodo(todo.id));
                                }}
                                style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: 'red',
                                    fontSize: '16px',
                                    cursor: 'pointer'
                                }}
                            >
                                <FaTrashCan />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ToDoList;
