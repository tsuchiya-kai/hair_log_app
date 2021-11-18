import { WIPSection } from "components/organisms/index";

export default function About() {
  const description = `こちらのページはサービスの概要を説明するLPにする予定です。\nzozotownではGSAPを使っているようだったのでGSAPをキャッチアップして落とし込む予定です`;
  return (
    <WIPSection title="ヘアログとは（aboutページ）" description={description} />
  );
}
