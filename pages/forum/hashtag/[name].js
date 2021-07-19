import { useRouter } from "next/router";

import Layout from "../../../components/Layout/Layout";

function HashtagPage() {
  const router = useRouter();
  const { name } = router.query;

  return <Layout>Страница хэштега {name}</Layout>;
}

export default HashtagPage;
