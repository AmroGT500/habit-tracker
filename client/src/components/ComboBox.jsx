import React from 'react';
import styled from 'styled-components'
import { Cell, StackChildren, Text } from '../components/common'
import * as OutlineIcons from '@heroicons/react/24/outline'

const ComboBoxSelect = styled.select`
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

const ComboBoxArrow = styled.div`
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

const ComboBox = ({ name, children }) => {
  return (
    <Cell>
      <StackChildren space={10}>
        <Text color="#fff" fontSize="15px">
          {name}
        </Text>

        <ComboBoxContainer>
          <ComboBoxSelect name={name} id={name}>
            {children}
          </ComboBoxSelect>
          <ComboBoxArrow>
            <OutlineIcons.ChevronRightIcon />
          </ComboBoxArrow>
        </ComboBoxContainer>
      </StackChildren>
    </Cell>
  )
}

export default ComboBox