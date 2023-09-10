import React from 'react'
import { TextInput } from '../common'
import FormField from '../FormField';

const TextField = ({ name, label, value, onChange, error }) => {
  return (
    <FormField name={name} label={label} error={error}>
      <TextInput
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
    </FormField>
  )
}

export default TextField;