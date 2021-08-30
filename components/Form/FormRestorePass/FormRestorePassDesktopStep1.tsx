import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  restorePass,
  toggleFormVisibility,
  toggleFormStep1Visibility,
  changeEmail,
} from "../../../store/forms/restorepass/restorepass.actions";

import { BtnFlatType, ButtonType } from "../../../entities/Btn";
import { StateFormRestorePass } from "../../../entities/State";
import BtnFlat from "../../BtnFlat/BtnFlat";
import Input from "../../Input/Input";
import Loader from "../../Loader/Loader";
import FormContentSubtitle from "../Blocks/FormContentSubtitle";
import FormHeader from "../Blocks/FormHeader";
import FormReCaptchaText from "../Blocks/FormReCaptchaText";

export const FormRestorePassDesktopStep1 = () => {
  const dispatch = useDispatch();
  const [isValid, isLoading, errorMsg]: [boolean, boolean, string] =
    useSelector((state: { formRestorePass: StateFormRestorePass }) => [
      state.formRestorePass.isValid,
      state.formRestorePass.isLoading,
      state.formRestorePass.errorMsg,
    ]);

  // const isLoading = useSelector(
  //   (state: { formRestorePass: StateFormRestorePass }) =>
  //     state.formRestorePass.isLoading
  // );

  const inputEmailData = {
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    withError: true,
    onChange: (email) => dispatch(changeEmail(email)),
  };

  const btnSendPassData: BtnFlatType = {
    type: ButtonType.SUBMIT,
    isLoading: isLoading,
    onClick: (e) => {
      e && e.preventDefault();
      if (isLoading) return;
      if (!isValid) return;

      dispatch(restorePass());
    },
  };

  const closeForm = () => {
    dispatch(toggleFormVisibility());
    dispatch(toggleFormStep1Visibility());
  };

  return (
    <form className="form form_tight form_visible">
      <div className="form__container">
        <FormHeader
          classNames="form__header_purple"
          isLoading={isLoading}
          title="Вспомнить пароль"
          onClick={closeForm}
        />
      </div>
      <div className="form__content">
        <FormContentSubtitle>
          Введи свой email, и мы вышлем тебе новый пароль
        </FormContentSubtitle>
        <div className="form__line form__content-subtitle">
          Использовать свой email
        </div>
        <div className="form__line">
          <Input {...inputEmailData} />
        </div>
        {errorMsg && (
          <div className="form__error form__error_visible">{errorMsg}</div>
        )}
        <div className="form__btns">
          <Loader isVisible={isLoading}>
            <BtnFlat {...btnSendPassData}>Отправить пароль</BtnFlat>
          </Loader>
        </div>
        <FormReCaptchaText />
      </div>
    </form>
  );
};

export default FormRestorePassDesktopStep1;
