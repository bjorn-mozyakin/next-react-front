import React from "react";

// Styles
// import styles from "./ListItem.module.scss";

type ListItemProps = {
  children?: React.ReactNode;
  name?: string;
  createdAt?: string;
};

export const ListItem = ({ name, createdAt }: ListItemProps) => {
  console.log("crab", name, createdAt);

  return (
    <li className="list-item">
      <a className="list-item__link" href="/forum/hashtag/отношения">
        <div className="list-item__container">
          <div className="list-item__first-line">
            <h3 className="list-item__title">{name}</h3>
            <div className="list-item__other-text">Создана {createdAt}</div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ListItem;
