import React, {useState, useContext} from 'react';
import {Context} from './context';

export default function TodoItem({id, title, completed}) {
    const {removeTodo, toogleTodo} = useContext(Context );

    const cls = ['todo'];

    if (completed) {
        cls.push('completed');
    }

    return (
        <li className={cls.join(' ')}>
            <label>
                <input
                    type='checkbox'
                    checked={completed}
                    onChange={() => toogleTodo(id)}
                />
                <span>{ title }</span>

                <i
                    className='material-icons red-text'
                    onClick={() => removeTodo(id)}
                >
                    delete
                </i>
            </label>
        </li>
    )
}