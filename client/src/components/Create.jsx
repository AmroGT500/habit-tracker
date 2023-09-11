import React, { useState } from 'react';
import { IconContainer, ColorIcon, Cell, InlineChildren, StackChildren, Text } from '../components/common';
import TextField from './form/TextField';
import GridField from './form/GridField';

import { Link } from 'react-router-dom';
import * as OutlineIcons from '@heroicons/react/24/outline'
import { habitColorsMap } from '../constants/habitColors';
import ComboField from './form/ComboField';

function Create() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [streakGoal, setStreakGoal] = useState('None')
  const [reminder, setReminder] = useState('None')
  const [icon, setIcon] = useState('AcademicCapIcon')
  const [color, setColor] = useState('red')

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted')
    } else {
      console.log('Form has errors')
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!name) {
      newErrors.name = 'Name is required'
    } else if (name.length > 20) {
      newErrors.name = 'Name must be less than 20 characters'
    } else if (name.length < 3) {
      newErrors.name = 'Name must be more than 3 characters'
    }
    if (!description) {
      newErrors.description = 'Description is required'
    } else if (description.length > 50) {
      newErrors.description = 'Description must be less than 50 characters'
    } else if (description.length < 3) {
      newErrors.description = 'Description must be more than 3 characters'
    }
    if (!streakGoal) {
      newErrors.streakGoal = 'Streak/Goal is required'
    }
    if (!reminder) {
      newErrors.reminder = 'Reminder is required'
    }
    if (!icon) {
      newErrors.icon = 'Icon is required'
    }
    if (!color) {
      newErrors.color = 'Color is required'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  return (
    <StackChildren space={10} >
      <InlineChildren space={10}>
        <Link to="/">
          <IconContainer>
            <OutlineIcons.XMarkIcon />
          </IconContainer>
        </Link>
        <Cell align={'center'}>
          <Text color="#fff" fontSize="20px" align='center'>
            Create Habit
          </Text>
        </Cell>
        <IconContainer onClick={handleSubmit}>
          <OutlineIcons.CheckCircleIcon />
        </IconContainer>
      </InlineChildren>

      <TextField
        name={'habit-name'}
        label={'Name'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />

      <TextField
        name={'habit-description'}
        label={'Description'}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        error={errors.description}
      />

      <InlineChildren space={10}>
        <Cell>
          <ComboField name="habit-streak" label="Streak/Goal" value={streakGoal} onChange={(e) => setStreakGoal(e.target.value)} error={errors.streakGoal}>
            <option value="None">None</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </ComboField>
        </Cell>

        <Cell>
          <ComboField name="habit-reminder" label="Reminder" value={reminder} onChange={(e) => setReminder(e.target.value)} error={errors.reminder}>
            <option value="None">None</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </ComboField>
        </Cell>
      </InlineChildren>

      <GridField
        name="habit-icon"
        label="Icon"
        optionsMap={OutlineIcons}
        value={icon}
        onClick={(v) => setIcon(v)}
        renderOption={(Icon) => <Icon/>}
        error={errors.icon} />
      
      <GridField
        name="habit-color"
        label="Color"
        optionsMap={habitColorsMap}
        value={color}
        onClick={(v) => setColor(v)}
        renderOption={(colorArr) => <ColorIcon color={colorArr[3]} />}
        error={errors.color} />

    </StackChildren>
  );
}

export default Create;
