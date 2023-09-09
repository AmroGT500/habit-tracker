import React from 'react';
import styled from 'styled-components'
import { ButtonIcon, Cell, InlineChildren, StackChildren, Text } from '../components/common';

import { Link } from 'react-router-dom';
import * as OutlineIcons from '@heroicons/react/24/outline'
import { habitColors } from '../constants/habitColors';

const IconGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    max-height: 140px;
    overflow-y: hidden;
`

const ColorIcon = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 5px;
`

const HabitInput = styled.input`
    background-color: #344154;
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 16px;
    width: 100%;
    max-width: 600px;
    outline: none;
`

const HabitComboBox = styled.select`
    appearance: none; /* Remove default styles */
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #344154;
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 16px;
    width: 100%;
    max-width: 600px;
    outline: none;
  `
const HabitComboBoxArrow = styled.div`
    position: absolute;
    top: 75%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    pointer-events: none;
    color: #fff;
    height: 100%;
    width: 15px;
  `

const ComboBoxContainer = styled.div`
    position: relative;
`

function ComboBox({ name, children }) {
  return (
    <Cell>
      <StackChildren space={10}>
        <Text color="#fff" fontSize="15px">
          {name}
        </Text>

        <ComboBoxContainer>
          <HabitComboBox name={name} id={name}>
            {children}
          </HabitComboBox>
          <HabitComboBoxArrow>
            <OutlineIcons.ChevronRightIcon />
          </HabitComboBoxArrow>
        </ComboBoxContainer>
      </StackChildren>
    </Cell>
  )
}

function Create() {
  return (
    <StackChildren space={10}>
      <InlineChildren space={10}>
        <ButtonIcon>
          <OutlineIcons.XMarkIcon />
        </ButtonIcon>
        <Cell align={'center'}>
          <Text color="#fff" fontSize="20px" align='center'>
            Create Habit
          </Text>
        </Cell>
        <Link to="/create">
          <ButtonIcon>
            <OutlineIcons.CheckCircleIcon />
          </ButtonIcon>
        </Link>
      </InlineChildren>

      <Text color="#fff" fontSize="15px">
        Name
      </Text>

      <HabitInput type="text" />

      <Text color="#fff" fontSize="15px">
        Description
      </Text>

      <HabitInput type="text" />

      <InlineChildren space={10}>
        <ComboBox name="Streak/Goal">
          <option value="1">None</option>
          <option value="2">Daily</option>
          <option value="3">Weekly</option>
          <option value="4">Monthly</option>
        </ComboBox>

        <ComboBox name="Reminder">
          <option value="1">None</option>
          <option value="2">Daily</option>
          <option value="3">Weekly</option>
          <option value="4">Monthly</option>
        </ComboBox>
      </InlineChildren>

      <Text color="#fff" fontSize="15px">
        Icon
      </Text>
      <IconGrid>
        {Object.values(OutlineIcons).map((Icon, index) => (
          <ButtonIcon key={index} backgroundColor={'#344154'}>
            <Icon />
          </ButtonIcon>
        ))}
      </IconGrid>

      <Text color="#fff" fontSize="15px">
        Color
      </Text>
      <IconGrid>
        {habitColors.map((color, index) => (
          <ButtonIcon key={index} backgroundColor={'#344154'}>
            <ColorIcon color={color[3]} />
          </ButtonIcon>
        ))}
      </IconGrid>
    </StackChildren >
  );
}

export default Create;
