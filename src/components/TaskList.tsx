import React, { useEffect, useState } from 'react'
import Task from './Task'
import { TodoProps } from '../types/types';

const TaskList = () => {
    const [todos, setTodos] = useState<TodoProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
                const json = await response.json();
                setTodos(json);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {todos.map((todo) => (
                <Task key={todo.id} {...todo} />
            ))}
        </div>
    )
}

export default TaskList