'use client';

import React, { useState } from 'react';

const TodoEditor = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const onChangeTask = (e) => {
        setTask(e.target.value);
    };
    const onSubmit = () => {
        addTodo(task);
        setTask('');
    };
    return (
        <div>
            <h2>새로운 Todo 작성하기</h2>
            <form>
                <input
                    type="text"
                    value={task}
                    onChange={onChangeTask}
                    placeholder="무엇을 해야 하나요?"
                />
                <button
                    type="submit"
                    onClick={onSubmit}
                    disabled={!task}
                >
                    할 일 추가
                </button>
            </form>
        </div>
    );
};

export default TodoEditor;
