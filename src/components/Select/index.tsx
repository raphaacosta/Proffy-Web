import React, { SelectHTMLAttributes } from 'react';

import { SelectBlock } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options,...rest }) => {
  return (
    <SelectBlock className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>Selecione qual você quer ensinar</option>

        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
    </SelectBlock>
  );
}

export default Select;