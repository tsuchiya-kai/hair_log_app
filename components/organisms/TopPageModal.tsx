import { AppModal } from "components/atoms/index";
import styles from "styles/components/organisms/top-page-modal.module.scss";

type Props = {
  data?: CatalogData;
  isShow: boolean;
  switchFunc: () => void;
};
export default function TopPageModal({ data, isShow, switchFunc }: Props) {
  return (
    <AppModal
      className={styles.topPageModal}
      isShow={isShow}
      switchFunc={switchFunc}
      isScroll
    >
      <h3>{data?.beautician}</h3>

      {data?.recent_posts.map((post, i) => {
        return (
          <div key={i + 1}>
            <img src={post.url} alt={`投稿${i + 1}`} />
            <p>{post.description}</p>
          </div>
        );
      })}
    </AppModal>
  );
}
