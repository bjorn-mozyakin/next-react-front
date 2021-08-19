import React from "react";

type Props = {
  children?: React.ReactNode;
  isVisible?: boolean;
};

const Loader = ({ children, isVisible = false }: Props) => {
  // TODO заменить имена классов ajax-loader
  return (
    <div className="ajax-loader">
      {children}
      <div
        className={`loader-spin loader-spin_white-400 ${
          isVisible ? "" : "loader-spin_hidden"
        }`}
      ></div>
    </div>
  );
};

export default Loader;
