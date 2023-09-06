import React from 'react';
import HabitList from '../components/HabitList';
import AddHabitForm from '../components/AddHabitForm';

function Home() {
    return (
        <div className="home">
            <HabitList />
            <AddHabitForm />
        </div>
    );
}

export default Home;
