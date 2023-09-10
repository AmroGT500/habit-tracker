import React from 'react'
import styled from 'styled-components'
import { ToggleIcon } from '../common'
import FormField from '../FormField';

const IconGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
    max-height: 140px;
    overflow-y: hidden;
`

const GridField = ({ name, label, optionsMap, renderOption, value, onClick, error }) => {
  return (
    <FormField name={name} label={label} error={error}>
      <IconGrid>
        {Object.entries(optionsMap).map(([optionKey, optionValue], index) => (
          <ToggleIcon key={index} backgroundColor={'#344154'} selected={value === optionKey} onClick={() => onClick(optionKey)}>
            {renderOption(optionValue)}
          </ToggleIcon>
        ))}
      </IconGrid>
    </FormField>
  )
}

export default GridField;