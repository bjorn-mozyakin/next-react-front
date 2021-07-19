// Styles
// import styles from './Search.module.scss';

import React, { FC } from "react";

import { ButtonType, BtnRoundType } from "../../entities/Btn";
import BtnRound from "../BtnRound/BtnRound";

export const Search: FC = () => {
  const BtnSearchData: BtnRoundType = {
    styles: {
      volume: "flat",
      size: "tiny",
      bg: "white-500",
      states: "crimson-100",
    },
    title: "Поиск",
    type: ButtonType.SUBMIT,
    additionalClasses: [
      "search_submit",
      "submit",
      "icon-before_search-18-crimson",
    ],
  };
  return (
    <form className="topbar__search search" action="/search/" method="GET">
      <div className="search__container">
        <div className="search__form">
          <input
            className="search__input"
            type="text"
            name="q"
            defaultValue=""
            placeholder="Поиск"
            autoComplete="off"
            aria-label="search"
          />
          <BtnRound {...BtnSearchData}></BtnRound>
          <button
            className="submit btn-round btn-round_volume_flat btn-round_size_tiny btn-round_bg_white-500 btn-round_states_crimson-100 icon-before_search-18-crimson search__submit"
            title="Поиск"
            type="submit"
          ></button>
        </div>
        <input type="hidden" name="where" defaultValue="forum" />
        <input type="hidden" name="category" defaultValue="" />
        <input type="hidden" name="sort" defaultValue="relevance" />
        <input type="hidden" name="control_charset" defaultValue="0" />
      </div>
    </form>
  );
};

export default Search;
