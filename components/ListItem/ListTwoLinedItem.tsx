import React from "react";

// Styles
// import styles from "./ListItem.module.scss";
import Link from "../Link/Link";

type ListTwoLinedItemProps = {
  children?: React.ReactNode;
  name?: string;
  createdAt?: string;
  repliesCount?: string;
};

export const ListTwoLinedItem = ({
  name,
  createdAt,
  repliesCount,
}: ListTwoLinedItemProps) => {
  console.log("crab", name, createdAt);
  const href = "/relations/men/thread/4968398/";

  return (
    <li className="list-item ">
      <div id="topic_0" className="list-item__anchor"></div>
      <Link className="list-item__link" href={href}>
        <div className="list-item__container">
          <div className="list-item__first-line">
            <h3 className="list-item__title list-item__title_visited text_weight_medium">
              {name}
            </h3>
            <div className="list-item__secondary"></div>
          </div>
          <div className="list-item__second-line">
            <div className="list-item__date">Создана {createdAt}</div>
            <div className="list-item__other-text">{repliesCount} ответа</div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ListTwoLinedItem;
