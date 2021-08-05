import React from "react";

import { BtnFlatType } from "../../../entities/Btn";
import BtnFlat from "../../BtnFlat/BtnFlat";
import ContentNav from "../../ContentNav/ContentNav";
import Link from "../../Link/Link";
import ListTwoLined from "../../List/ListTwoLined";
import Tabs from "../../Tabs/Tabs";

type ListingPageProps = {
  data: any;
  title: string;
  activeTab?: string;
};

export const ListingPage = ({ data, title, activeTab }: ListingPageProps) => {
  type TabsData = {
    name: string;
    href: string;
    isActive?: boolean;
  };

  const tabsPopularData: TabsData[] = [
    {
      name: "сутки",
      href: "1d",
    },
    {
      name: "3 дня",
      href: "3d",
    },
    {
      name: "неделя",
      href: "7d",
    },
    {
      name: "месяц",
      href: "30d",
    },
    {
      name: "все",
      href: "all",
    },
  ];

  const tabsNewData: TabsData[] = [
    {
      name: "все",
      href: "new",
    },
    {
      name: "ждут отета",
      href: "need-answer",
    },
  ];

  const isNewThreadsActive = activeTab === "new" || activeTab === "need-answer";

  const tabsData = isNewThreadsActive ? tabsNewData : tabsPopularData;

  tabsData.forEach((data) => {
    data.isActive = data.href === activeTab;
  });

  const btnSortNewData: BtnFlatType = {
    styles: {
      color: isNewThreadsActive ? "crimson-500" : "bahamas-500",
      bg: isNewThreadsActive ? "crimson-50" : "transparent",
      states: "crimson-100",
      icon: isNewThreadsActive ? "bell-18-crimson" : "bell-18-bahamas",
    },
    additionalClasses: ["content-nav__actions-item"],
  };

  const btnSortPopularData: BtnFlatType = {
    styles: {
      color: isNewThreadsActive ? "bahamas-500" : "crimson-500",
      bg: isNewThreadsActive ? "transparent" : "crimson-50",
      states: "crimson-100",
      icon: isNewThreadsActive ? "star-18-bahamas" : "star-18-crimson",
    },
    additionalClasses: ["content-nav__actions-item"],
  };

  return (
    <>
      <ContentNav title={title}>
        <Link href="/forum/?sort=new">
          <BtnFlat {...btnSortNewData}>По новизне</BtnFlat>
        </Link>
        <Link href="/forum/?sort=1d">
          <BtnFlat {...btnSortPopularData}>По популярности</BtnFlat>
        </Link>
      </ContentNav>
      <Tabs data={tabsData} />
      <ListTwoLined data={data} />
    </>
  );
};

export default ListingPage;
