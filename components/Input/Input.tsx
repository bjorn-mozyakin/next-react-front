import React from "react";

type Props = {
  name: string;
  type?: string;
  placeholder?: string;
  autocomplete?: string;
  required?: boolean;
  withError?: boolean;
  onChange?: (event: any) => void;
};

const Input = ({
  name,
  type = "text",
  placeholder = "",
  autocomplete = "",
  required = false,
  withError = false,
  onChange,
}: Props) => {
  return (
    <div className="input-area">
      <input
        className="input-area__input"
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autocomplete}
        required={required}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      {withError && (
        <div className="input-area__underneath">
          <div className="input-area__error-msg"></div>
        </div>
      )}
    </div>
  );
};

export default Input;
