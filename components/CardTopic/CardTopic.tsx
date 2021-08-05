import React from "react";

type Props = {
  name: string;
  content: string;
};

// posts will be populated at build time by getStaticProps()
function CardTopic({ name, content }: Props) {
  return (
    <>
      <ul>{name}</ul>
      <ul>{content}</ul>
    </>
  );
}

export default CardTopic;
