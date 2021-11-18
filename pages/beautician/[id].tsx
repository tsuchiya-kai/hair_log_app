import Head from "next/head";
import { WIPSection } from "components/organisms/index";

export default function BeauticianDetail() {
  const description = `こちらのページは美容師ごとのページです。\n美容師1人 = 1つのカタログの粒度で作成する予定なのでこちらのページがカタログに当たります`;
  return (
    <>
      <Head>
        <title>まるまるさんのカタログ</title>
        <meta property="og:title" content="カタログ" />
      </Head>
      <WIPSection title="カタログページ" description={description} />
    </>
  );
}
