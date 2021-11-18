import Head from "next/head";
import { WIPSection } from "components/organisms/index";

export default function About() {
  const description = `こちらのページはサービスの概要を説明するLPにする予定です。\nzozotownではGSAPを使っているようだったのでGSAPをキャッチアップして落とし込む予定です`;
  return (
    <>
      <Head>
        <title>HairLogとは</title>
        <meta property="og:title" content="ヘアログとは" />
        <meta
          property="og:description"
          content="美容師向けカタログ作成アプリ「ヘアログ」とは"
        />
        <meta
          name="description"
          content="美容師向けカタログ作成アプリ「ヘアログ」とは"
        />
      </Head>
      <WIPSection
        title="ヘアログとは（aboutページ）"
        description={description}
      />
    </>
  );
}
