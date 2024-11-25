import { format, formatDate } from 'date-fns';
import React from 'react';

const TodoHd = () => {
    return (
        <div>
            <strong>
                {format(new Date(), 'yyyy.MM.dd')}
            </strong>
            <span>오늘의 할 일을 적어보세요</span>
        </div>
    );
};

export default TodoHd;
