import React from "react";
import { useSelector } from "react-redux";

import FormRestorePassDesktopStep1 from "./FormRestorePassDesktopStep1";
import FormRestorePassDesktopStep2 from "./FormRestorePassDesktopStep2";

import { StateFormRestorePass } from "../../../entities/State";

export const FormRestorePassDesktop = () => {
  const [isStep1Visible, isStep2Visible] = useSelector(
    (state: { formRestorePass: StateFormRestorePass }) => [
      state.formRestorePass.isStep1Visible,
      state.formRestorePass.isStep2Visible,
    ]
  );

  return (
    <>
      {isStep1Visible && <FormRestorePassDesktopStep1 />}
      {isStep2Visible && <FormRestorePassDesktopStep2 />}
    </>
  );
};

export default FormRestorePassDesktop;
