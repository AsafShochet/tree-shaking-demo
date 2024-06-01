import React from "react";

export interface MyDropdownProps {
  options: { value: string; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const MyDropdown: React.FC<MyDropdownProps> = ({
  options,
  onChange,
}) => (
  <select onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);
