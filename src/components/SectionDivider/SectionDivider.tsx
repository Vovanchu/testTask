import styles from "./SectionDivider.module.scss";

type SectionDividerProps = {
  height?: number;
};

const SectionDivider = ({ height = 40 }: SectionDividerProps) => {
  return (
    <div className={styles.wrapper} style={{ height: `${height}px` }}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default SectionDivider;
