import React from 'react';
import ComboBox from '../ComboBox';
import FormField from '../FormField';

const ComboField = ({ name, label, value, children, onChange, error }) => {
  return (
    <FormField name={name} label={label} error={error}>
      <ComboBox id={name}
        value={value}
        onChange={onChange}>
        {children}
      </ComboBox>
    </FormField>
  )
}

export default ComboField