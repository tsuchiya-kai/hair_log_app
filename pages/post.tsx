import { WIPSection } from "components/organisms/index";

export default function Post() {
  const description = `こちらのページはログイン必須のページとして実装する予定です。\nユーザー登録した美容師が自分のカタログに投稿するための画面です。\nバリデーション実装等のformにまつわる技術をお見せする目的で制作することを予定しています。`;
  return <WIPSection title="投稿ページ" description={description} />;
}
