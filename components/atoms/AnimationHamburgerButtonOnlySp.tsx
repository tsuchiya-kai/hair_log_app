import styles from "styles/components/atoms/hamburger-btn.module.scss";

type Props = {
  isActive: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLDivElement>) => void;
};
export default function HamburgerButton(props: Props) {
  const { isActive, ...rest } = props;
  return (
    <div className={styles.hamburgerButton} {...rest}>
      <div className={`${styles.wrap} ${isActive ? styles.Active : ""}`}>
        <span className={`${styles.span} ${isActive ? styles.Active : ""}`} />
      </div>
    </div>
  );
}
