// Styles
// import styles from './BtnFlat.module.scss';

import React from "react";

import { BtnFlatType, ButtonType } from "../../entities/Btn";
import { renameDataAttributes } from "../../utils/helpers";

export const BtnFlat = ({
  children,
  styles: {
    size = "content",
    color = "white-500",
    bg = "crimson-500",
    states = "crimson-700",
    icon = null,
  } = {},
  title = null,
  type = ButtonType.BUTTON,
  additionalClasses = [],
  dataAttributes = null,
  onClick = () => {},
}: BtnFlatType) => {
  const classNames = [
    `btn-flat`,
    `btn-flat_size_${size}`,
    `btn-flat_color_${color}`,
    `btn-flat_bg_${bg}`,
    `btn-flat_states_${states}`,
    icon ? `btn-flat_icon_yes icon-before_${icon}` : "",
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

export default BtnFlat;
