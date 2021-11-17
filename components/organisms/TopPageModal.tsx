import { AppModal } from "components/atoms/index";
import styles from "styles/components/organisms/top-page-modal.module.scss";

type Props = {
  data?: CatalogData;
  isShow: boolean;
  switchFunc: () => void;
};
export default function TopPageModal({ isShow, switchFunc }: Props) {
  return (
    <AppModal
      className={styles.topPageModal}
      isShow={isShow}
      switchFunc={switchFunc}
    >
      {"テスト"}
    </AppModal>
  );
}
