import React from 'react';

function StatsView() {
    // Mock data
    const totalHabits = 10;
    const habitsCompleted = 6;
    const successRate = (habitsCompleted / totalHabits) * 100;

    return (
        <div className="stats-view">
            <h2>Statistics</h2>
            <p>Total Habits: {totalHabits}</p>
            <p>Habits Completed: {habitsCompleted}</p>
            <p>Success Rate: {successRate.toFixed(2)}%</p>
            {/* other insights */}
        </div>
    );
}

export default StatsView;
