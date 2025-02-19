import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
        {label}:
      </label>
      <input
        id={name}
        name={name}
        type={type}
        // placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full  border-b-2 bg-[#F8FBFB]  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:rounded-lg focus:py-2 px-4"
      />
    </div>
  );
};

export default InputField;
