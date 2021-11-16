import { SearchIcon } from "components/atoms/icon/index";
import styles from "styles/components/atoms/search-input.module.scss";

type Props = {
  className?: string;
  placeholder?: string;
  state: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput(props: Props) {
  const { className, state, placeholder, ...rest } = props;
  return (
    <div className={`${styles.searchInput} ${className ?? ""}`}>
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
