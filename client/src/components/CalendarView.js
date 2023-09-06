import React from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarView() {
    // Mock data
    const habitCompletionDates = [
        new Date(2023, 8, 1),
        new Date(2023, 8, 3),
        new Date(2023, 8, 5),

    ];

    return (
        <div className="calendar-view">
            <h2>Habit Completion Calendar</h2>
            <Calendar
                tileClassName={({ date }) =>
                    habitCompletionDates.some(d =>
                        d.getDate() === date.getDate() &&
                        d.getMonth() === date.getMonth() &&
                        d.getFullYear() === date.getFullYear()
                    )
                        ? 'habit-completed'
                        : ''
                }
            />
        </div>
    );
}

export default CalendarView;
