import styles from "styles/components/atoms/loader-dom.module.scss";
type Props = {
  className?: string;
};
export default function LoaderDom({ className }: Props) {
  return (
    <div className={`${className ? className : ""} ${styles.loaderDom}`}>
      <div className={styles.inner} />
    </div>
  );
}
