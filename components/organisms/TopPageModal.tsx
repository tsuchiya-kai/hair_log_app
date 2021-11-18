import { AppModal } from "components/atoms/index";
import Link from "next/link";
import urls from "lib/urls";
import styles from "styles/components/organisms/top-page-modal.module.scss";
import innerStyles from "styles/components/organisms/top-page-modal-inner.module.scss";

type Props = {
  data: CatalogData;
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
      <div className={innerStyles.topPageModalInner}>
        <h3 className={innerStyles.beautician}>{data.beautician}</h3>
        <Link href={urls.catalogPageUrl(data.beautician_id)}>
          <a>この美容師のカタログを見る</a>
        </Link>

        {data.recent_posts.map((post, i) => {
          return (
            <div className={innerStyles.imagewrap} key={i + 1}>
              <img
                className={innerStyles.image}
                src={post.url}
                alt={`投稿${i + 1}`}
              />
              <p className={innerStyles.description}>{post.description}</p>
            </div>
          );
        })}
      </div>
    </AppModal>
  );
}
