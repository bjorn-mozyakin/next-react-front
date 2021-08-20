import React from "react";

import BtnFlat from "../../BtnFlat/BtnFlat";

type FinalStepBtn = {
  text?: string;
  onClick: () => void;
};

type Props = {
  icon?: string;
  iconBg?: string;
  title?: string;
  text?: string;
  firstBtn?: FinalStepBtn;
  secondBtn?: FinalStepBtn;
};

const FormFinalStep = ({
  icon,
  iconBg,
  title,
  text,
  firstBtn,
  secondBtn,
}: Props) => {
  const firstBtnData = {
    onClick: firstBtn ? firstBtn.onClick : () => {},
  };

  const secondBtnData = {
    additionalClasses: ["outdent-left_small"],
    styles: {
      color: "black-500",
      bg: "transparent",
      states: "crimson-100",
    },
    onClick: secondBtn ? secondBtn.onClick : () => {},
  };

  return (
    <div className="form__final">
      <div className="form__final-left">
        <div className={`form__wait-icon ${icon} ${iconBg}`}></div>
      </div>
      <div className="form__final-right">
        <div className="form__title">{title}</div>
        <div className="form__line form__subtitle">{text}</div>
        <div className="form__btns">
          {firstBtn && <BtnFlat {...firstBtnData}>{firstBtn.text}</BtnFlat>}
          {secondBtn && <BtnFlat {...secondBtnData}>{secondBtn.text}</BtnFlat>}
        </div>
      </div>
    </div>
  );
};

export default FormFinalStep;
