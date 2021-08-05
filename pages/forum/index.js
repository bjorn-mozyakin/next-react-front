import { useRouter } from "next/router";
import React from "react";

import axiosInstance from "../../utils/axios";
import { defineDeviceType } from "../../utils/helpers";

import Layout from "../../components/Layout/Layout";
import ListingPage from "../../components/Pages/ListingPage/ListingPage";
import MainPageTemplate from "../../components/Pages/MainPage/MainPage";
import Placeholder from "../../components/Placeholder/Placeholder";

function MainPage({ data, deviceType }) {
  const router = useRouter();
  const { sort } = router.query;

  let template;
  switch (sort) {
    case "new":
    case "need-answer":
      template = (
        <ListingPage title="Все темы форума" activeTab={sort} data={data} />
      );
      break;
    case "1d":
    case "3d":
    case "7d":
    case "30d":
    case "all":
      template = (
        <ListingPage title="Все темы форума" activeTab={sort} data={data} />
      );
      break;
    case "test":
      template = (
        <Placeholder
          html={data.length ? data[0].layout : ""}
          script={data.length ? data[0].config : ""}
        >
          -
        </Placeholder>
      );
      // template = (
      //   <>
      //     <div>-{data.length ? data[0].layout : ""}-</div>;
      //     <div>-{data.length ? data[0].config : ""}-</div>;
      //   </>
      // );
      break;
    default:
      template = (
        <MainPageTemplate title="Форум Woman.ru" activeTab={sort} data={data} />
      );
  }

  return <Layout deviceType={deviceType}>{template}</Layout>;
}

export async function getServerSideProps({ query, req }) {
  const isMobile = defineDeviceType(req.headers["user-agent"]);

  const { sort } = query;
  let urls;
  switch (sort) {
    case "new":
      urls = ["threads?page=1&order[publishedAt]=desc"];
      break;
    case "need-answer":
      urls = ["threads?page=1&order[publishedAt]=desc"];
      break;
    case "1d":
      urls = [
        "threads?page=1&order[repliesCount]=desc&publishedAt[after]=-1 days",
      ];
      break;
    case "3d":
      urls = [
        "threads?page=1&order[repliesCount]=desc&publishedAt[after]=-3 days",
      ];
      break;
    case "7d":
      urls = [
        "threads?page=1&order[repliesCount]=desc&publishedAt[after]=-7 days",
      ];
      break;
    case "30d":
      urls = [
        "threads?page=1&order[repliesCount]=desc&publishedAt[after]=-30 days",
      ];
      break;
    case "all":
      urls = ["threads?page=1&order[repliesCount]=desc"];
      break;
    case "test":
      // urls = ["http://localhost:3000/api/banners/"];
      urls = ["http://10.51.12.148:4000/api/banners/"];
      break;
    default:
      urls = ["hashtags?limit=10", "threads?page=1"];
  }

  if (urls) {
    const requests = urls.map((url) => axiosInstance.get(url));
    try {
      const responses = await Promise.all(requests);
      if (sort === "test") {
        return {
          props: {
            data: responses[0].data,
            deviceType: isMobile ? "mobile" : "desktop",
          },
        };
      }
      const data = responses.map(
        (response) => response.data["hydra:member"] ?? response
      );
      return data.length > 1
        ? {
            props: {
              data: {
                hashtags: data[0],
                threads: data[1],
                deviceType: isMobile ? "mobile" : "desktop",
              },
            },
          }
        : {
            props: {
              data: data[0],
              deviceType: isMobile ? "mobile" : "desktop",
            },
          };
    } catch (err) {
      console.log(`crab3: ${err}`);
    }
  } else {
    return {
      props: { data: null, deviceType: isMobile ? "mobile" : "desktop" },
    };
  }
}

export default MainPage;
