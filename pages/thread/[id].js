import { useState } from "react";

import BtnFlat from "../../components/BtnFlat/BtnFlat";
import CardTopic from "../../components/CardTopic/CardTopic";
import Header from "../../components/Header/Header";

import axiosInstance from "../../utils/axios";

function Thread({ data }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const getThreads = async () => {
    try {
      const threadId = 4;
      const response = await axiosInstance.get(
        `https://forum.inglorium.com/api/threads/${threadId}`
      );
      const { name, content } = response.data;
      setName(name);
      setContent(content);
      console.log(`crab FETCH: ${data}`);
    } catch (err) {
      console.log(`crab FETCH: ${err}`);
    }
  };

  const btnFlatData = {
    text: "Подгрузить",
    additionalClasses: [
      "user-info__action-btn",
      "user-info__edit-btn",
      "analytic-link",
    ],
    onClick: getThreads,
  };

  console.log("crab", data);

  return (
    <>
      <Header />
      <CardTopic {...data} />
      <BtnFlat {...btnFlatData} />
      <div>{name}</div>
      <div>{content}</div>
    </>
  );
}

export async function getStaticPaths() {
  const response = await axiosInstance.get(
    "https://forum.inglorium.com/api/threads?limit=10&active=1"
  );
  const threads = response.data["hydra:member"];

  const paths = threads.map((thread) => ({
    params: { id: `${thread.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const response = await axiosInstance.get(
      `https://forum.inglorium.com/api/threads/${params.id}`
    );
    const { data } = response;
    return {
      props: { data },
    };
  } catch (err) {
    console.log(`crab3: ${err}`);
  }
}

export default Thread;
