import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleLoginFormVisibility } from "../../../store/forms/login/login.actions";
import {
  signup,
  updateEmailInFormSignUp,
  updateUsernameInFormSignUp,
  toggleSignUpFormVisibility,
  toggleSubscribeInFormSignUp,
  toggleRulesInFormSignUp,
} from "../../../store/forms/signup/signup.actions";

import { BtnFlatType } from "../../../entities/Btn";
import { StateFormSignUp } from "../../../entities/State";
import BtnFlat from "../../BtnFlat/BtnFlat";
import Checkbox from "../../Checkbox/Checkbox";
import Input from "../../Input/Input";
import Link from "../../Link/Link";
import Loader from "../../Loader/Loader";
import FormHeader from "../Blocks/FormHeader";
import FormReCaptchaText from "../Blocks/FormReCaptchaText";
import FormSocials from "../Blocks/FormSocials";

export const FormLoginDesktop = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: { formSignUp: StateFormSignUp }) => state.formSignUp.isLoading
  );

  const inputEmailData = {
    name: "email",
    placeholder: "Email",
    required: true,
    withError: true,
    onChange: (email) => dispatch(updateEmailInFormSignUp(email)),
  };

  const inputUsernameData = {
    name: "username",
    placeholder: "Никнейм",
    withError: true,
    onChange: (username) => dispatch(updateUsernameInFormSignUp(username)),
  };

  const btnLoginData: BtnFlatType = {
    additionalClasses: ["outdent-left_small"],
    styles: {
      color: "bahamas-500",
      bg: "transparent",
      states: "crimson-100",
    },
    onClick: () => {
      dispatch(toggleSignUpFormVisibility());
      dispatch(toggleLoginFormVisibility());
    },
  };

  const btnSignUpData: BtnFlatType = {
    isLoading,
    onClick: () => {
      dispatch(signup());
    },
  };

  const checkboxSubscriptionData = {
    name: "subscribe",
    onClick: () => {
      dispatch(toggleSubscribeInFormSignUp());
    },
  };

  const checkboxRulesData = {
    name: "rules",
    required: true,
    onClick: () => {
      dispatch(toggleRulesInFormSignUp());
    },
  };

  const closeForm = () => {
    dispatch(toggleSignUpFormVisibility());
  };

  return (
    <form className="form form_tight form_visible">
      <div className="form__container">
        <FormHeader
          isLoading={isLoading}
          classNames="form__header_purple"
          title="Регистрация на Woman.ru"
          onClick={closeForm}
        />
      </div>
      <div className="form__content">
        <FormSocials />
        <div className="form__line form__content-subtitle">
          Использовать свой email
        </div>
        <div className="form__line">
          <Input {...inputEmailData} />
          <Input {...inputUsernameData} />
        </div>
        <div className="form__line">
          <Checkbox {...checkboxSubscriptionData}>
            Подписаться на рассылку
          </Checkbox>
          <Checkbox {...checkboxRulesData}>
            Я соглашаюсь и принимаю
            <Link
              href="/pages/forum_rules/"
              classNames="form__link"
              target="_blank"
            >
              &nbsp;правила публикации контента&nbsp;
            </Link>
            на Woman.ru
          </Checkbox>
          <div className="form__error"></div>
        </div>
        <div className="form__btns">
          <Loader isVisible={isLoading}>
            <BtnFlat {...btnSignUpData}>Зарегистрироваться</BtnFlat>
          </Loader>
          <BtnFlat {...btnLoginData}>Войти</BtnFlat>
        </div>
        <FormReCaptchaText />
      </div>
    </form>
  );
};

export default FormLoginDesktop;
