import React from 'react';

function HabitItem({ habit }) {
    return (
        <div className="habit-item">
            <h3>{habit.name}</h3>
            <p>Progress: {habit.progress} times</p>
            {/* Actions (complete, edit, delete, etc.) */}
        </div>
    );
}

export default HabitItem;
