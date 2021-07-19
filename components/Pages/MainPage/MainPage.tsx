import React from "react";

import ContentNav from "../../ContentNav/ContentNav";
import List from "../../List/List";
import Title from "../../Title/Title";

type MainPageProps = {
  data: any;
  title: string;
};

export const MainPage = ({ data, title }: MainPageProps) => {
  return (
    <>
      <ContentNav title={title} />
      <Title>Тренды</Title>
      {data.hashtags && <List data={data.hashtags} />}
      <Title>Новое сегодня</Title>
      {data.threads && <List data={data.threads} />}
    </>
  );
};

export default MainPage;
