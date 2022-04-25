import React from "react";
import { CheckboxField } from "./styles";

interface CheckboxProps {
  name: string;
  value?: any;
  checked?: boolean;
  label: string;
  onChange: (value: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  value,
  checked = false,
  label,
  onChange,
}) => {
  return (
    <CheckboxField
      onClick={(e) => {
        e.preventDefault();
        onChange(value);
      }}
      data-testid="checkbox-container"
    >
      <input
        type="checkbox"
        id={name}
        value={value}
        checked={checked}
        data-testid="checkbox"
        readOnly
      />
      <label htmlFor={name} data-testid="checkbox-label">
        {label}
      </label>
      <span className="checkmark"></span>
    </CheckboxField>
  );
};

export default React.memo(Checkbox);
