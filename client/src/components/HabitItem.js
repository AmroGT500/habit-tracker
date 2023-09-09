// HabitItem.js
import React from 'react';
import CalendarView from './CalendarView';

function HabitItem({ habit }) {
    return (
        <div className="habit-item">
            {/* Ensure habit is defined before rendering */}
            {habit && (
                <>
                    <h3>{habit.name}</h3>
                    <p>Progress: {habit.progress}</p>
                    <CalendarView habit={habit} /> {/* Render the Calendar component */}
                </>
            )}
        </div>
    );
}

export default HabitItem;