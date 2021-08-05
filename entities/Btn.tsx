import React from "react";

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
}

export interface BtnFlatType {
  children?: React.ReactNode;
  styles?: {
    size?: string;
    color?: string;
    bg?: string;
    states?: string;
    icon?: string | null;
  };
  title?: string;
  type?: ButtonType;
  additionalClasses?: string[];
  onClick?: () => void;
}

export interface BtnRoundType {
  children?: React.ReactNode;
  styles?: {
    volume?: string;
    size?: string;
    bg?: string;
    states?: string;
    icon?: string | boolean;
  };
  title?: string;
  type?: ButtonType;
  additionalClasses?: string[];
  onClick?: () => void;
}
