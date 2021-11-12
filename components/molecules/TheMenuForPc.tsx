import styles from "styles/components/molecules/the-menu-for-pc.module.scss";

export default function TheMenuForPC(props) {
  return (
    <section
      {...props}
      className={`${styles.theMenuForPc} ${props.className}`}
    ></section>
  );
}
