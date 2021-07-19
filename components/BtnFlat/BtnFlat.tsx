// Styles
// import styles from './BtnFlat.module.scss';

import React from "react";

import { BtnFlatType, ButtonType } from "../../entities/Btn";

export const BtnFlat = ({
  children,
  styles: {
    size = "content",
    color = "white-500",
    bg = "crimson-500",
    states = "crimson-700",
    icon = null,
  } = {},
  type = ButtonType.BUTTON,
  title = null,
  additionalClasses = [],
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

  return (
    <button
      className={classNames}
      onClick={onClick}
      {...(title ? `title=${title}` : "")}
      type={type}
    >
      {children}
    </button>
  );
};

export default BtnFlat;
