// Home.js

import React, { useState } from 'react';
import HabitList from './HabitList';
import '../styling/home.css';
import CalendarView from './CalendarView';
import AddHabitForm from './AddHabitForm';
import NewCalendar from './NewCalendar';

function Home() {
    const [habits, setHabits] = useState([]);

    const onAddHabit = (newHabit) => {
        setHabits([...habits, newHabit]);
    };

    return (
        <div className="home">
            <HabitList />
            <NewCalendar/>
            <AddHabitForm onAddHabit={onAddHabit} />
        </div>
    );
}

export default Home;
