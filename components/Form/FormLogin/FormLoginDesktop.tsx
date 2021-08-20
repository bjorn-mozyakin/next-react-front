import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  login,
  updateEmailInFormLogin,
  updatePasswordInFormLogin,
  toggleLoginFormVisibility,
} from "../../../store/forms/login/login.actions";
import {
  toggleFormVisibility,
  toggleFormStep1Visibility,
} from "../../../store/forms/restorepass/restorepass.actions";
import { toggleSignUpFormVisibility } from "../../../store/forms/signup/signup.actions";

import { BtnFlatType } from "../../../entities/Btn";
import { StateFormLogin } from "../../../entities/State";
import BtnFlat from "../../BtnFlat/BtnFlat";
import Input from "../../Input/Input";
import Loader from "../../Loader/Loader";

import FormHeader from "../Blocks/FormHeader";
import FormReCaptchaText from "../Blocks/FormReCaptchaText";
import FormSocials from "../Blocks/FormSocials";

export const FormLoginDesktop = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: { formLogin: StateFormLogin }) => state.formLogin.isLoading
  );

  const inputUsernameData = {
    name: "email",
    placeholder: "Email",
    autocomplete: "email",
    required: true,
    withError: true,
    onChange: (email) => dispatch(updateEmailInFormLogin(email)),
  };

  const inputUPasswordData = {
    name: "password",
    placeholder: "Пароль",
    type: "password",
    autocomplete: "current-password",
    required: true,
    withError: true,
    onChange: (password) => dispatch(updatePasswordInFormLogin(password)),
  };

  const btnLoginData: BtnFlatType = {
    isLoading,
    onClick: () => {
      dispatch(login());
    },
  };

  const btnSignUpData: BtnFlatType = {
    additionalClasses: ["outdent-left_small"],
    styles: {
      color: "bahamas-500",
      bg: "transparent",
      states: "crimson-100",
    },
    onClick: () => {
      dispatch(toggleLoginFormVisibility());
      dispatch(toggleSignUpFormVisibility());
    },
  };

  const btnRestorePasswordData: BtnFlatType = {
    styles: {
      color: "black-500",
      bg: "transparent",
      states: "crimson-100",
      icon: "lock-18-crimson",
    },
    onClick: () => {
      dispatch(toggleLoginFormVisibility());
      dispatch(toggleFormVisibility());
      dispatch(toggleFormStep1Visibility());
    },
  };

  const closeForm = () => {
    dispatch(toggleLoginFormVisibility());
  };

  return (
    <form className="form form_tight form_visible">
      <div className="form__container">
        <FormHeader
          classNames="form__header_purple"
          isLoading={isLoading}
          title="Вход на Woman.ru"
          onClick={closeForm}
        />
      </div>
      <div className="form__content">
        <FormSocials />
        <div className="form__line form__content-subtitle">
          Использовать свой email
        </div>
        <div className="form__line">
          <Input {...inputUsernameData} />
          <Input {...inputUPasswordData} />
          <div className="form__error"></div>
          <div className="form__btns">
            <Loader isVisible={isLoading}>
              <BtnFlat {...btnLoginData}>Войти</BtnFlat>
            </Loader>
            <BtnFlat {...btnSignUpData}>Зарегистрироваться</BtnFlat>
          </div>
          <div className="form__line">
            <BtnFlat {...btnRestorePasswordData}>Забыли пароль?</BtnFlat>
          </div>
          <FormReCaptchaText />
        </div>
      </div>
    </form>
  );
};

export default FormLoginDesktop;
