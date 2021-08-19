import React from "react";

type Props = {
  children?: React.ReactNode;
  name: string;
  label?: string;
  required?: boolean;
};

export const Checkbox = ({ children, name, required = false }: Props) => {
  return (
    <div className="checkbox checkbox_colored">
      <label className="checkbox__container">
        <input
          className="checkbox__input"
          name={name}
          type="checkbox"
          required={required}
        />
        <span className="checkbox__square"></span>
        <span className="checkbox__text">{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
