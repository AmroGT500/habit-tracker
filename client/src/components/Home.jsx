import React from 'react';
import styled from 'styled-components'
import { IconContainer, Cell, InlineChildren, StackChildren, Text } from '../components/common';

import { Link } from 'react-router-dom';
import { BoltIcon, BookOpenIcon, CodeBracketIcon, ForwardIcon } from '@heroicons/react/24/outline'
import { Cog8ToothIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import HabitCard from '../components/HabitCard';
import { green, red, teal, yellowMd } from '../constants/habitColors';

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
                <HabitCard name={'Sport'} description={'Weightlifting, running or similar'} icon={<BoltIcon />} color={teal} />
                <HabitCard name={'Coding'} description={'Learn to code with Flutter & Dart'} icon={<CodeBracketIcon />} color={green} />
                <HabitCard name={'Reading'} description={'Read everyday for at least 15 min'} icon={<BookOpenIcon />} color={yellowMd} />
                <HabitCard name={'Walk'} description={'Go for a walk out on the beach'} icon={<ForwardIcon />} color={red} />
            </HabitContainer>
        </StackChildren>
    );
}

export default Home;
