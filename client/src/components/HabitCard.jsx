import React from 'react';
import styled from 'styled-components'
import { ButtonIcon, Cell, InlineChildren, StackChildren, Text } from './common';
import { randomNumber } from '../constants/utility';
import { CheckIcon } from '@heroicons/react/24/outline'

const HabitCardContainer = styled.div`
    background-color: #1f2a3b;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    overflow: hidden;
    max-width: 600px;
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

const HabitCard = ({ name, description, icon, color }) => {
  return (
    <HabitCardContainer>
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
    </HabitCardContainer>
  )
}

export default HabitCard