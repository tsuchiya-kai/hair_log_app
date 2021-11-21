import { AppModal, AppLinkButton } from "components/atoms/index";
import urls from "lib/urls";
import styles from "styles/components/organisms/top-page-modal.module.scss";
import innerStyles from "styles/components/organisms/top-page-modal-inner.module.scss";
import { useState, useEffect } from "react";

type Props = {
  data: CatalogData;
  isShow: boolean;
  switchFunc: () => void;
};
export default function TopPageModal({ data, isShow, switchFunc }: Props) {
  const [isShowMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!isShow) setShowMore(false);
  }, [isShow]);
  return (
    <AppModal
      className={styles.topPageModal}
      isShow={isShow}
      switchFunc={switchFunc}
      isScroll
    >
      <div className={innerStyles.topPageModalInner}>
        <h3 className={innerStyles.beautician}>stylist: {data.beautician}</h3>

        {/* 一つ目の投稿は常に表示 */}
        <div
          className={`${innerStyles.imagewrap} ${
            data.recent_posts.length === 1 ? "_mb-4" : ""
          }`}
        >
          <img
            className={innerStyles.image}
            src={data.recent_posts[0]?.url}
            alt="投稿-1"
          />
          <p className={innerStyles.description}>
            {data.recent_posts[0]?.description}
          </p>
        </div>

        <div
          className={`${innerStyles.mores} ${
            isShowMore ? innerStyles.Show : ""
          }`}
        >
          {data.recent_posts.map((post, i) => {
            if (i === 0) return;
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

        {data.recent_posts.length === 1 ? (
          ""
        ) : (
          <button
            className={innerStyles.showmore}
            onClick={() => setShowMore((prev) => !prev)}
          >
            {isShowMore ? "Display Less" : "Show More"}
          </button>
        )}

        <AppLinkButton
          className={innerStyles.linkbutton}
          href={urls.catalogPageUrl(data.beautician_id)}
          radius="30px"
          disabled={!data.beautician_id}
        >
          この美容師のカタログを見る
        </AppLinkButton>
      </div>
    </AppModal>
  );
}
