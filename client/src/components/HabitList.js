import React from 'react';
import HabitItem from './HabitItem';

function HabitList() {
    // mock data
    const habits = [
        { id: 1, name: 'Exercise', progress: 3 },
        { id: 2, name: 'Read', progress: 5 },
        
    ];

    return (
        <div className="habit-list">
            {habits.map(habit => (
                <HabitItem key={habit.id} habit={habit} />
            ))}
        </div>
    );
}

export default HabitList;
