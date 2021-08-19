import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  restorePass,
  toggleRestorePasswordFormVisibility,
  updateUsernameInFormLogin,
} from "../../../store/actions";

import { BtnFlatType } from "../../../entities/Btn";
import BtnFlat from "../../BtnFlat/BtnFlat";
import Input from "../../Input/Input";
import Loader from "../../Loader/Loader";

import FormContentSubtitle from "../Blocks/FormContentSubtitle";
import FormHeader from "../Blocks/FormHeader";
import FormReCaptchaText from "../Blocks/FormReCaptchaText";
import { State } from "../../../entities/State";

export const FormRestorePassDesktop = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: State) => state.formRestorePass.isLoading
  );

  const inputEmailData = {
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    withError: true,
    onChange: (username) => dispatch(updateUsernameInFormLogin(username)),
  };

  const btnSendPassData: BtnFlatType = {
    isLoading,
    onClick: () => {
      dispatch(restorePass());
    },
  };

  const closeForm = () => {
    dispatch(toggleRestorePasswordFormVisibility());
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

export default FormRestorePassDesktop;
