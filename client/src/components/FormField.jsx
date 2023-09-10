import React from 'react'
import { StackChildren, Text } from './common'

const FormField = ({ name, label, children, error }) => {
  return (
    <StackChildren space={10}>
      <label htmlFor={name}>
        <Text color="#fff" fontSize="15px">{label}</Text>
      </label>
      {children}
      {error && <Text color="#F87171" fontSize="12px">{error}</Text>}
    </StackChildren>
  )
}

export default FormField;