import React from "react";
import { useDispatch } from "react-redux";

import {
  signup,
  updateUsernameInFormLogin,
  updatePasswordInFormLogin,
  toggleLoginFormVisibility,
  toggleSignUpFormVisibility,
} from "../../../store/actions";

import { BtnFlatType } from "../../../entities/Btn";
import BtnFlat from "../../BtnFlat/BtnFlat";
import Checkbox from "../../Checkbox/Checkbox";
import Input from "../../Input/Input";
import Link from "../../Link/Link";

import FormHeader from "../Blocks/FormHeader";
import FormReCaptchaText from "../Blocks/FormReCaptchaText";
import FormSocials from "../Blocks/FormSocials";

export const FormLoginDesktop = () => {
  const dispatch = useDispatch();

  const inputUsernameData = {
    name: "email",
    placeholder: "Email",
    required: true,
    withError: true,
    onChange: (username) => dispatch(updateUsernameInFormLogin(username)),
  };

  const inputUPasswordData = {
    name: "name",
    placeholder: "Никнейм",
    withError: true,
    onChange: (password) => dispatch(updatePasswordInFormLogin(password)),
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
    onClick: () => {
      dispatch(signup());
    },
  };

  const checkboxSubscriptionData = {
    name: "subscribe",
  };

  const checkboxRulesData = {
    name: "rules",
    required: true,
  };

  const closeForm = () => {
    dispatch(toggleSignUpFormVisibility());
  };

  return (
    <form className="form form_tight form_visible">
      <div className="form__container">
        <FormHeader
          title="Регистрация на Woman.ru"
          classNames="form__header_purple"
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
          <BtnFlat {...btnSignUpData}>Зарегистрироваться</BtnFlat>
          <BtnFlat {...btnLoginData}>Войти</BtnFlat>
        </div>
        <FormReCaptchaText />
      </div>
    </form>
  );
};

export default FormLoginDesktop;
