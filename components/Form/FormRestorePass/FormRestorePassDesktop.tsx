import React from "react";
import { useDispatch } from "react-redux";

import { updateUsernameInFormLogin } from "../../../store/actions";

import { BtnFlatType } from "../../../entities/Btn";
import BtnFlat from "../../BtnFlat/BtnFlat";
import Input from "../../Input/Input";

import FormContentSubtitle from "../Blocks/FormContentSubtitle";
import FormHeader from "../Blocks/FormHeader";
import FormReCaptchaText from "../Blocks/FormReCaptchaText";

export const FormRestorePassDesktop = () => {
  const dispatch = useDispatch();

  const inputEmailData = {
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    withError: true,
    onChange: (username) => dispatch(updateUsernameInFormLogin(username)),
  };

  const btnSendPassData: BtnFlatType = {
    onClick: () => {},
  };

  return (
    <form className="form form_tight form_visible">
      <div className="form__container">
        <FormHeader title="Вспомнить пароль" classNames="form__header_purple" />
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
          <BtnFlat {...btnSendPassData}>Отправить пароль</BtnFlat>
        </div>
        <FormReCaptchaText />
      </div>
    </form>
  );
};

export default FormRestorePassDesktop;
