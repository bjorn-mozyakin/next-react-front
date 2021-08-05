// Styles
// import styles from "./BtnRound.module.scss";

import React from "react";

import { ButtonType, BtnRoundType } from "../../entities/Btn";

export const BtnRound = ({
  children,
  styles: {
    volume = "flat",
    size = "content",
    bg = "white-500",
    states = "crimson-100",
    icon = false,
  } = {},
  title = "",
  type = ButtonType.BUTTON,
  additionalClasses = [],
  onClick = () => {},
}: BtnRoundType) => {
  const classNames = [
    `btn-round`,
    `btn-round_volume_${volume}`,
    `btn-round_size_${size}`,
    `btn-round_bg_${bg}`,
    `btn-round_states_${states}`,
    icon ? `icon-before_${icon}` : "",
  ]
    .concat(additionalClasses)
    .join(" ");

  return (
    <button className={classNames} onClick={onClick} title={title} type={type}>
      {children}
    </button>
  );
};

export default BtnRound;
