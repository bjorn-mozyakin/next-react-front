import React from "react";

type Props = {
  children?: React.ReactNode;
};
const Modal = ({ children }: Props) => {
  return <div className="modal">{children}</div>;
};

export default Modal;
