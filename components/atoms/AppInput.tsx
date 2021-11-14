import { SearchIcon } from "components/atoms/icon/index";
import styles from "styles/components/atoms/app-input.module.scss";

type Props = {
  className?: string;
  placeholder?: string;
  state: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AppInput(props: Props) {
  const { className, state, placeholder, ...rest } = props;
  return (
    <div className={`${styles.appInput} ${className ?? ""}`}>
      <input
        className={styles.input}
        value={state}
        placeholder={placeholder}
        {...rest}
      />
      <SearchIcon className={styles.icon} />
    </div>
  );
}
