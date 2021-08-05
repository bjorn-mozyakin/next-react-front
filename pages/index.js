import React from "react";

import BtnFlat from "../components/BtnFlat/BtnFlat";

export default function Home(props) {
  const btnFlatData = {
    additionalClasses: [
      "user-info__action-btn",
      "user-info__edit-btn",
      "analytic-link",
    ],
  };

  return (
    <>
      <h1>This page has a title 🤔</h1>
      <p>{JSON.stringify(props)}</p>
      <BtnFlat {...btnFlatData}>Кнопка</BtnFlat>
    </>
  );
}

export const getStaticProps = () => ({
  props: {
    hello: "world",
    random: Math.random(),
  },
});
