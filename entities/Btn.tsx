import React from "react";

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
}

export interface BtnFlatType {
  children?: React.ReactNode;
  additionalClasses?: string[];
  dataAttributes?: any;
  isLoading?: boolean;
  styles?: {
    size?: string;
    color?: string;
    bg?: string;
    states?: string;
    icon?: string | null;
  };
  title?: string;
  type?: ButtonType;
  onClick?: (e: any) => void;
}

export interface BtnRoundType {
  children?: React.ReactNode;
  additionalClasses?: string[];
  dataAttributes?: any;
  isLoading?: boolean;
  styles?: {
    volume?: string;
    size?: string;
    bg?: string;
    states?: string;
    icon?: string | boolean;
  };
  title?: string;
  type?: ButtonType;
  onClick?: () => void;
}
