import React, { useState } from 'react';
import '../styling/add-habit-form.css';

function AddHabitForm({ onAddHabit }) {
    const [habitName, setHabitName] = useState('');
    const [selectedColor, setSelectedColor] = useState('#FF5733');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newHabit = {
            name: habitName,
            color: selectedColor,
        };

        onAddHabit(newHabit);

        setHabitName('');
        setSelectedColor('#FF5733'); 
    };

    return (
        <div className="add-habit-form">
            <h3>Add New Habit</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter habit name"
                    value={habitName}
                    onChange={(e) => setHabitName(e.target.value)}
                />
                <input
                    type="color"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                />
                <button type="submit">Add Habit</button>
            </form>
        </div>
    );
}

export default AddHabitForm;
