import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { IconContainer, Cell, InlineChildren, StackChildren, Text } from '../components/common';

import { Link } from 'react-router-dom';
import { Cog8ToothIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import HabitCard from '../components/HabitCard';

const HabitContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 10px;
`

function Home() {
    const [habits, setHabits] = useState([]);
    const [habitLogs, setHabitLogs] = useState([]);

    useEffect(() => {
        getHabits();
        getLogs();
    }, []);

    const getHabits = async () => {
        try {
            const response = await fetch('/mock/habits.json'); // Update the path to your JSON file
            if (!response.ok) {
                throw new Error('Failed to fetch habitydata');
            }
            const data = await response.json();
            setHabits(data.habits);
        } catch (error) {
            console.error('Error fetching habits:', error);
        }
    }

    const getLogs = async () => {
        try {
            const response = await fetch('/mock/habit-logs.json'); // Update the path to your JSON file
            if (!response.ok) {
                throw new Error('Failed to fetch log data');
            }
            const data = await response.json();
            setHabitLogs(data.logs);
        } catch (error) {
            console.error('Error fetching logs:', error);
        }
    }

    const getHabitLogs = (habit) => {
        const currentDate = new Date();
        const dateList = [];

        for (let i = 0; i < 53; i++) {
            const startingMonday = new Date(currentDate);
            startingMonday.setDate(currentDate.getDate() - (currentDate.getDay() + 6) % 7);
            startingMonday.setDate(startingMonday.getDate() - (i * 7));

            for (let j = 0; j < 7; j++) {
                const date = new Date(startingMonday);
                date.setHours(0, 0, 0, 0);
                date.setDate(startingMonday.getDate() + j);
                dateList.push(date)
            }
        }

        const result = [];

        const currentHabitLogs = habitLogs.filter(log => log.habitId === habit.id);

        dateList.forEach(date => {
            const timestamp = date.getTime();
            const matchingLog = currentHabitLogs.find(log => log.timestamp === String(timestamp));

            result.push(matchingLog?.value || 0);
        });

        return result;
    }

    if (!habits.length) return null;

    if (!habitLogs.length) return null;


    return (
        <StackChildren space={10}>
            <InlineChildren space={10}>
                <IconContainer>
                    <Cog8ToothIcon />
                </IconContainer>
                <Cell>
                    <Text color="#fff" fontSize="30px" align='center'>
                        Habit
                        <Text color="#ba80f4" fontSize="30px" align='center' inline="true">Kit</Text>
                    </Text>
                </Cell>
                <Link to="/create">
                    <IconContainer>
                        <PlusCircleIcon />
                    </IconContainer>
                </Link>
            </InlineChildren>
            <HabitContainer>
                {habits.map((habit) => (
                    <HabitCard
                        key={habit.id}
                        name={habit.name}
                        description={habit.description}
                        iconName={habit.icon}
                        colorName={habit.color}
                        logs={getHabitLogs(habit)} />
                ))}
            </HabitContainer>
        </StackChildren>
    );
}

export default Home;
