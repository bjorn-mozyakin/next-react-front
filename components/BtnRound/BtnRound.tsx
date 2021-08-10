// Styles
// import styles from "./BtnRound.module.scss";

import React from "react";

import { ButtonType, BtnRoundType } from "../../entities/Btn";
import { renameDataAttributes } from "../../utils/helpers";

export const BtnRound = ({
  children,
  styles: {
    volume = "flat",
    size = "content",
    bg = "white-500",
    states = "crimson-100",
    icon = false,
  } = {},
  title = null,
  type = ButtonType.BUTTON,
  additionalClasses = [],
  dataAttributes = null,
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

  let attrs;
  if (dataAttributes) {
    attrs = renameDataAttributes(dataAttributes);
  }

  return (
    <button
      className={classNames}
      {...(attrs || "")}
      {...(title ? `title=${title}` : "")}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BtnRound;
