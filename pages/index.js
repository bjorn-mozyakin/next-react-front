import Head from "next/head";
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
      <Head>
        <title>This page has a title 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/static/main.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://i42-cdn.woman.ru/static/forum/desktop/css/_desktop.css?36-1601"
          media="all"
        />
      </Head>

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
