import React from "react";

import { BtnRoundType } from "../../../entities/Btn";
import BtnRound from "../../BtnRound/BtnRound";

import FormContentSubtitle from "./FormContentSubtitle";

const FormSocials = () => {
  const data = [
    {
      name: "facebook",
      icon: "facebook-18-havelock-blue",
    },
    {
      name: "vkontakte",
      icon: "vk-18-bahamas-blue",
    },
    {
      name: "odnoklassniki",
      icon: "ok-18-mustard",
    },
  ];

  return (
    <div className="form__socials">
      <FormContentSubtitle>Использовать социальную сеть</FormContentSubtitle>
      <div>
        {data.map((sb) => {
          const btnData: BtnRoundType = {
            additionalClasses: ["form__sb"],
            styles: {
              size: "tiny",
              bg: "transparent",
              states: "crimson-100",
              icon: sb.icon,
            },
            dataAttributes: {
              name: sb.name,
            },
          };
          return <BtnRound key={`socials_${sb.name}`} {...btnData} />;
        })}
      </div>
    </div>
  );
};

export default FormSocials;
