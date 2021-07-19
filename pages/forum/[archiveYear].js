import { useRouter } from "next/router";

import axiosInstance from "../../utils/axios";

import Layout from "../../components/Layout/Layout";
import List from "../../components/List/List";

function ArchivePage({ data }) {
  const router = useRouter();
  const { archiveYear } = router.query;
  const year = archiveYear.split("_")[1];

  console.log("crab", data);
  return (
    <Layout>
      Страница архива за {year} год
      <List data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const years = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
  const paths = years.map((year) => ({
    params: {
      archiveYear: `archive_${year}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await axiosInstance.get(
    "https://forum.inglorium.com/api/threads?limit=10&active=1"
  );
  const data = response.data["hydra:member"];

  return {
    props: { data },
  };
}

export default ArchivePage;
