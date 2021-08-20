import React from "react";
import { useDispatch } from "react-redux";

import { toggleRestorePasswordFormStep2Visibility } from "../../../store/forms/restorepass/restorepass.actions";

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
      onClick: () => dispatch(toggleRestorePasswordFormStep2Visibility()),
    },
  };
  return (
    <section className="form">
      <div className="form__container">
        <div className="form__content">
          <FormFinalStep {...finalStepData} />
        </div>
      </div>
    </section>
  );
};

export default FormRestorePassDesktopStep2;
