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

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    };

    return (
        <div>
            <h2>새로운 Todo 작성하기</h2>
            <form>
                <input
                    type="text"
                    value={task}
                    onChange={onChangeTask}
                    onKeyDown={onKeyDown}
                    className="p-3"
                    placeholder="할 일을 입력해 주세요"
                />
                <button
                    type="submit"
                    disabled={!task}
                    onClick={onSubmit}
                >
                    추가
                </button>
            </form>
        </div>
    );
};

export default TodoEditor;
