// HabitList.js
import React from 'react';
import HabitItem from './HabitItem';

function HabitList() {
    // mock data
    const habits = [
        { id: 1, name: 'Exercise', progress: 3, completedDays: [1, 3, 5], color: 'green' },
        { id: 2, name: 'Read', progress: 5, completedDays: [2, 4, 6], color: 'purple' },
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
