import React from 'react';
import styled from 'styled-components'
import { ButtonIcon, ColorIcon, Cell, InlineChildren, StackChildren, Text, InputField } from '../components/common';
import ComboBox from './ComboBox';

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

      <InputField type="text" />

      <Text color="#fff" fontSize="15px">
        Description
      </Text>

      <InputField type="text" />

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
    </StackChildren>
  );
}

export default Create;
