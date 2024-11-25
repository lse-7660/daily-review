import React from 'react';

const TodoItem = ({
    id,
    isDone,
    task,
    createdDate,
    onUpdate,
    onDelete,
}) => {
    return (
        <li key={id}>
            <input
                type="checkbox"
                checked={isDone}
                onChange={() => {
                    onUpdate(id);
                }}
            />
            <span>{task}</span>
            <span>
                {new Date(createdDate).toLocaleDateString()}
            </span>
            <button
                onClick={() => {
                    onDelete(id);
                }}
            >
                삭제
            </button>
        </li>
    );
};

export default TodoItem;
