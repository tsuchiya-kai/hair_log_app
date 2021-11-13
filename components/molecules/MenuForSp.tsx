import { useContext, useEffect } from "react";
import { maskContext } from "components/layout";
import styles from "styles/components/molecules/the-menu-for-sp.module.scss";

type Props = {
  className?: string;
  isShow: boolean;
};

export default function TheMenuForSp(props: Props) {
  const { className, isShow, ...rest } = props;
  const classNames = `${styles.theMenuForSp} ${className} ${
    isShow ? styles.Show : ""
  }`;

  const { setMaskIsShow } = useContext(maskContext);

  useEffect(() => {
    setMaskIsShow(isShow);
  }, [isShow]);

  return (
    <>
      <section {...rest} className={classNames}>
        <p>SPメニューの中身は</p>
        <p>遷移先が決まったら実装します！🙇‍♂️</p>
      </section>
    </>
  );
}
