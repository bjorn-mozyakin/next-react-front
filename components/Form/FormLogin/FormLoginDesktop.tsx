import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  auth,
  updateUsernameInFormLogin,
  updatePasswordInFormLogin,
  toggleLoginFormVisibility,
  toggleSignUpFormVisibility,
  toggleRestorePasswordFormVisibility,
} from "../../../store/actions";

import { BtnFlatType } from "../../../entities/Btn";
import BtnFlat from "../../BtnFlat/BtnFlat";
import Input from "../../Input/Input";
import Loader from "../../Loader/Loader";

import FormHeader from "../Blocks/FormHeader";
import FormReCaptchaText from "../Blocks/FormReCaptchaText";
import FormSocials from "../Blocks/FormSocials";
import { State } from "../../../entities/State";

export const FormLoginDesktop = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: State) => state.formLogin.isLoading);

  const inputUsernameData = {
    name: "username",
    placeholder: "Email",
    autocomplete: "username",
    required: true,
    withError: true,
    onChange: (username) => dispatch(updateUsernameInFormLogin(username)),
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
      dispatch(auth());
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
      dispatch(toggleRestorePasswordFormVisibility());
    },
  };

  const closeForm = () => {
    dispatch(toggleLoginFormVisibility());
  };

  return (
    <form className="form form_tight form_visible" action="/forum/ajax/auth/">
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
