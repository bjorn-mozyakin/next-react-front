// Styles
// import styles from "./List.module.scss";

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getThreadList } from "../../store/common/common.actions";

import { State } from "../../entities/State";
import ListTwoLinedItem from "../ListItem/ListTwoLinedItem";
import Placeholder from "../Placeholder/Placeholder";

type ListTwoLinedProps = {
  data: any;
};

export const ListTwoLined = ({ data }: ListTwoLinedProps) => {
  const anchor = useRef(null);
  const dispatch = useDispatch();
  const threads = useSelector(
    (state: { common: State }) => state.common.threads
  );
  let banners = useSelector((state: { common: State }) => state.common.banners);
  banners = banners.filter(
    (banner) => banner.placeholder === "forumTopBannerD"
  );
  const scrolledPageCount = useSelector(
    (state: { common: State }) => state.common.scrolledPageCount
  );

  let observerAnchorForInfiniteScroll;

  const intersectionAnchorForInfiniteScroll = async (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dispatch(getThreadList());
        if (scrolledPageCount >= 5)
          observerAnchorForInfiniteScroll.unobserve(anchor.current);
      }
    });
  };

  useEffect(() => {
    observerAnchorForInfiniteScroll = new IntersectionObserver(
      intersectionAnchorForInfiniteScroll,
      {
        rootMargin: "0px",
      }
    );
    const { current } = anchor;
    current && observerAnchorForInfiniteScroll.observe(current);
    return () => {
      current && observerAnchorForInfiniteScroll.unobserve(current);
    };
  }, [anchor]);

  // debugger;
  // data = devideArrays(data);
  // debugger;
  return (
    <div className="list" data-page-index="1">
      {banners.length}
      <ul className="list__container">
        {data.map((thread, idx) => {
          let template;
          if (idx % 5 === 0) {
            template = (
              <Placeholder
                html={banners.length ? banners[0].layout : ""}
                script={banners.length ? banners[0].config : ""}
              ></Placeholder>
            );
          }
          return (
            <>
              {template}
              <ListTwoLinedItem key={`list-item_${idx}`} {...thread} />
            </>
          );
        })}
      </ul>
      {threads &&
        threads.map((thread, idx) => {
          return (
            <ul key={idx} className="list__container">
              {thread &&
                thread.map((thr, idx) => {
                  return <ListTwoLinedItem key={`list-item_${idx}`} {...thr} />;
                })}
            </ul>
          );
        })}
      <div className="list-end-anchor" ref={anchor}></div>
    </div>
  );
};

export default ListTwoLined;
