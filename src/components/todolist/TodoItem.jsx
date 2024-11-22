import React from 'react';

const TodoItem = ({ isDone, task, createdDate }) => {
    return (
        <li>
            <input type="checkbox" checked={isDone} />
            <span>{task}</span>
            <span>{createdDate}</span>
            <button>삭제</button>
        </li>
    );
};

export default TodoItem;
