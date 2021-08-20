import React from "react";
import { useDispatch } from "react-redux";

import {
  toggleFormStep2Visibility,
  toggleFormVisibility,
} from "../../../store/forms/restorepass/restorepass.actions";

import FormFinalStep from "../Blocks/FormFinalStep";

export const FormRestorePassDesktopStep2 = () => {
  const dispatch = useDispatch();

  const finalStepData = {
    title: "Готово",
    text: "Новый пароль был отправлен на ваш email",
    icon: "icon-before_thread-approved-48-white",
    iconBg: "form__wait-icon_approved",
    firstBtn: {
      text: "Закрыть",
      onClick: () => {
        dispatch(toggleFormStep2Visibility());
        dispatch(toggleFormVisibility());
      },
    },
  };
  return (
    <section className="form form_tight form_visible">
      <div className="form__container">
        <div className="form__content">
          <FormFinalStep {...finalStepData} />
        </div>
      </div>
    </section>
  );
};

export default FormRestorePassDesktopStep2;
