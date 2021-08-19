import React from "react";

import { BtnRoundType } from "../../../entities/Btn";
import BtnRound from "../../BtnRound/BtnRound";

type Props = {
  title: string;
  classNames: string;
  onClick: () => void;
};

const FormHeader = ({ title, classNames, onClick }: Props) => {
  const closeBtnData: BtnRoundType = {
    additionalClasses: ["form__close"],
    styles: {
      size: "tiny",
      bg: "transparent",
      states: "white-200",
      icon: "close-18-white",
    },
    onClick: onClick,
  };

  return (
    <div className={`form__header ${classNames}`}>
      <div className="form__header-title">{title}</div>
      <BtnRound {...closeBtnData} />
    </div>
  );
};

export default FormHeader;
