'use client';

import React, { useEffect, useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockTodoData } from '@/data/todoData';

const Todo = () => {
    const [todos, setTodos] = useState(mockTodoData);

    const onUpdate = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isDone: !todo.isDone }
                    : todo
            )
        );
    };

    const onDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const addTodo = (task) => {
        const newTodo = {
            id: todos.length + 1,
            task: task,
            isDone: false,
            createdDate: new Date(),
        };
        setTodos([newTodo, ...todos]);
    };

    useEffect(() => {
        const savedTodos =
            JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
        );
    }, [todos]);

    return (
        <div className="flex flex-col gap-10 px-10 py-20">
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList
                todos={todos}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />
        </div>
    );
};

export default Todo;
