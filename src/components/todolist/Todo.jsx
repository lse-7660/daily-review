'use client';
import React, { useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockTodoData } from '@/data/todoData';

const Todo = () => {
    const [todos, setTodos] = useState(mockTodoData);

    // 할 일 추가하는 함수

    const addTodo = (task) => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                isDone: false,
                task: task,
                createdDate:
                    new Date().toLocaleDateString(),
            },
        ]);
    };

    return (
        <div className="flex flex-col gap-10 py-20 ps-10">
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
};

export default Todo;
