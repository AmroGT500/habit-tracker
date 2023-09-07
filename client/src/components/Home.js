import React from 'react';
import HabitList from './HabitList';
import AddHabitForm from './AddHabitForm';
import '../styling/home.css';

function Home() {
    return (
        <div className="home">
            <HabitList />
            <AddHabitForm />
        </div>
    );
}

export default Home;
