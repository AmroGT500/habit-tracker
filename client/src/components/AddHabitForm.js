import React, { useState } from 'react';

function AddHabitForm() {
    const [habitName, setHabitName] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // Logic to add habit with habitName
        setHabitName('');
    };

    return (
        <div className="add-habit-form">
            <h3>Add New Habit</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter habit name"
                    value={habitName}
                    onChange={e => setHabitName(e.target.value)}
                />
                <button type="submit">Add Habit</button>
            </form>
        </div>
    );
}

export default AddHabitForm;
