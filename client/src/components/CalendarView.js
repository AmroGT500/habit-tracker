// CalendarView.js
import React from 'react';
import '../styling/calendar-view.css';

function CalendarView({ habit }) {
    if (!habit) {
        return null;
    }

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const daysInMonth = getDaysInMonth(year, month);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="calendar">
            <h4 className="calendar-item-title">{habit.name} Calendar</h4>
            <div className="calendar-container">
                {weekDays.map((dayOfWeek, index) => (
                    <div key={index} className="day-of-week">
                        {dayOfWeek}
                    </div>
                ))}
                {daysArray.map((day) => (
                    <div
                        key={day}
                        className={`calendar-day ${habit.completedDays.includes(day) ? 'completed' : ''
                            }`}
                        style={{
                            backgroundColor: habit.completedDays.includes(day)
                                ? habit.color
                                : 'transparent',
                        }}
                    >
                        <div className="day-box">{day}</div>
                    </div>
))}


            </div>
        </div>
    );
}

export default CalendarView;
