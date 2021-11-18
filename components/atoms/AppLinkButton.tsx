import { ReactNode } from "react";
import Link from "next/link";
import styles from "styles/components/atoms/app-link-button.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
  color?: string;
  radius?: string;
  width?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  href: string;
};

export default function AppLinkButton({
  children,
  color,
  radius,
  width,
  onClick,
  className,
  disabled,
  href,
}: Props) {
  return (
    <button
      className={`${styles.appLinkButton} ${className ? className : ""}`}
      onClick={onClick}
      style={{
        backgroundColor: color ? color : "",
        borderRadius: radius ? radius : "",
        width: width ? width : "",
      }}
      disabled={disabled}
    >
      <Link href={href}>
        <a className={styles.link}>{children}</a>
      </Link>
    </button>
  );
}
