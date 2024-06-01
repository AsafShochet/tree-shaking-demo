import React from "react";

export interface MyTextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MyTextField: React.FC<MyTextFieldProps> = ({
  value,
  onChange,
}) => <input type="text" value={value} onChange={onChange} />;
