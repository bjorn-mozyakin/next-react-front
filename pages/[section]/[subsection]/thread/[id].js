import { useState } from "react";

import axiosInstance from "../../../../utils/axios";

import BtnFlat from "../../../../components/BtnFlat/BtnFlat";
import CardTopic from "../../../../components/CardTopic/CardTopic";
import Layout from "../../../../components/Layout/Layout";

function ThreadPage({ data }) {
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
    additionalClasses: [
      "user-info__action-btn",
      "user-info__edit-btn",
      "analytic-link",
    ],
    onClick: getThreads,
  };
  console.log("crab", data);

  return (
    <Layout>
      Страница темы
      <CardTopic {...data} />
      <BtnFlat {...btnFlatData}>Подгрузить</BtnFlat>
      <div>{name}</div>
      <div>{content}</div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await axiosInstance.get(
    "https://forum.inglorium.com/api/threads?limit=10&active=1"
  );
  const threads = response.data["hydra:member"];

  const paths = threads.map((thread) => ({
    params: { id: `${thread.id}`, section: "test", subsection: "test" },
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

export default ThreadPage;
