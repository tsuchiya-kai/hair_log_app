import { AppModal } from "components/atoms/index";

type Props = {
  isShow: boolean;
  switchFunc: () => void;
};
export default function TopPageModal({ isShow, switchFunc }: Props) {
  return (
    <AppModal isShow={isShow} switchFunc={switchFunc}>
      {"テスト"}
    </AppModal>
  );
}
