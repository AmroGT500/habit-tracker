import React from 'react';
import styled from 'styled-components'
import { BoltIcon, BookOpenIcon, CheckIcon, CodeBracketIcon, ForwardIcon } from '@heroicons/react/24/outline'
import { Cog8ToothIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import { green, red, teal, yellowMd } from '../constants/habitColors';

const HabitContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    max-width: 1210px;
    margin: 0 auto;
    gap: 10px;
`

const HabitCard = styled.div`
    background-color: #1f2a3b;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    overflow: hidden;
    max-width: 600px;
`

const ButtonIcon = styled.div`
    background-color: ${(props) => hexToRgbString(props.backgroundColor, props.alpha) || 'inherit'};
    border-radius: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
        color: #fff;
        width: 50%;
        height: 50%;
    }
`

const StackChildren = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    > * {
        margin-bottom: ${(props) => props.space}px;
    }
    > *:last-child {
        margin-bottom: 0;
    }
`

const InlineChildren = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    > * {
        margin-right: ${(props) => props.space}px;
    }
    > *:last-child {
        margin-right: 0;
    }
`

const Cell = styled.div`
    flex: 1;
`

const Text = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    font-family: Roboto;
    text-align:  ${(props) => props.align || 'left'};
    display: ${(props) => props.inline ? 'inline' : 'block'};
`

const HabitGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    grid-auto-flow: column;
    justify-content: flex-start;
    overflow-x: hidden;
    max-width: 100%;
    gap: 3px;
    direction: rtl;
`

const HabitBox = styled.div`
    background-color: ${({ level, habitColor }) =>
        level >= 0 && level < habitColor.length
            ? habitColor[level]
            : habitColor[0]}; // Use the lowest activity level color for out-of-range levels
    border-radius: 2px;
    width: 10px;
    height: 10px;
`

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function hexToRgbString(hex, alpha = 1) {
    if (!hex) return null;
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${[r, g, b].join(', ')}, ${alpha})`;
}

function HabitView({ name, description, icon, color }) {
    return (
        <HabitCard>
            <StackChildren space={10}>
                <InlineChildren space={10}>
                    <ButtonIcon backgroundColor={'#344154'}>
                        {icon}
                    </ButtonIcon>
                    <Cell>
                        <StackChildren space={5}>
                            <Text color="#fff" fontSize="16px">{name}</Text>
                            <Text color="#fff" fontSize="12px">{description}</Text>
                        </StackChildren>
                    </Cell>
                    <ButtonIcon backgroundColor={color[4]} alpha={0.2}>
                        <CheckIcon />
                    </ButtonIcon>
                </InlineChildren>
                <HabitGrid>
                    {Array(371).fill(0).map((_, i) => (
                        <HabitBox habitColor={color} level={randomNumber(0, 4)} key={i}></HabitBox>
                    ))}
                </HabitGrid>
            </StackChildren>
        </HabitCard>
    )
}

function Home() {
    return (
        <StackChildren space={10}>
            <InlineChildren space={10}>
                <ButtonIcon>
                    <Cog8ToothIcon />
                </ButtonIcon>
                <Cell>
                    <Text color="#fff" fontSize="30px" align='center'>
                        Habit
                        <Text color="#ba80f4" fontSize="30px" align='center' inline={true}>Kit</Text>
                    </Text>
                </Cell>
                <ButtonIcon>
                    <PlusCircleIcon />
                </ButtonIcon>
            </InlineChildren>
            <HabitContainer>
                <HabitView name={'Sport'} description={'Weightlifting, running or similar'} icon={<BoltIcon />} color={teal} />
                <HabitView name={'Coding'} description={'Learn to code with Flutter & Dart'} icon={<CodeBracketIcon />} color={green} />
                <HabitView name={'Reading'} description={'Read everyday for at least 15 min'} icon={<BookOpenIcon />} color={yellowMd} />
                <HabitView name={'Walk'} description={'Go for a walk out on the beach'} icon={<ForwardIcon />} color={red} />
            </HabitContainer>
        </StackChildren>
    );
}

export default Home;
