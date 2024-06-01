import React from "react";

export interface MyDatePickerProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MyDatePicker: React.FC<MyDatePickerProps> = ({
  value,
  onChange,
}) => <input type="date" value={value} onChange={onChange} />;
