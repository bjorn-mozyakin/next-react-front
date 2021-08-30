import React from "react";

type Props = {
  children?: React.ReactNode;
};
const FormContentSubtitle = ({ children }: Props) => {
  return <div className="form__content-subtitle">{children}</div>;
};

export default FormContentSubtitle;
