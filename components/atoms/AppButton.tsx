import { ReactNode } from "react";
import styles from "styles/components/atoms/app-button.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
  color?: string;
  radius?: string;
  width?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
};

export default function AppButton({
  children,
  color,
  radius,
  width,
  onClick,
  className,
  disabled,
}: Props) {
  return (
    <button
      className={`${styles.appButton} ${className ? className : ""}`}
      onClick={onClick}
      style={{
        backgroundColor: color ? color : "",
        borderRadius: radius ? radius : "",
        width: width ? width : "",
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
