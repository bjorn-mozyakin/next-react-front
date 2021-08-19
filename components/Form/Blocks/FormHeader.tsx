import React from "react";

import { BtnRoundType } from "../../../entities/Btn";
import BtnRound from "../../BtnRound/BtnRound";
import Loader from "../../Loader/Loader";

type Props = {
  classNames: string;
  isLoading?: boolean;
  title: string;
  onClick: () => void;
};

const FormHeader = ({
  classNames,
  isLoading = false,
  title,
  onClick,
}: Props) => {
  const closeBtnData: BtnRoundType = {
    additionalClasses: ["form__close"],
    isLoading,
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
      <Loader isVisible={isLoading}>
        <BtnRound {...closeBtnData} />
      </Loader>
    </div>
  );
};

export default FormHeader;
