import styles from "./Statistik.module.scss";

const Statistik = () => {
  return (
    <div className={styles.stat} id="statistik">
      <div className={styles.stat__title}>
        <h1 className={styles.stat__title__text}>Цифры</h1>
        <p className={styles.stat__title__date}>Cентябрь 2022</p>
      </div>

      <div className={styles.stat__cards}>
        <div className={styles.stat__cards__card}>
          <p className={styles.stat__cards__card__title}>Торговой прибыли</p>
          <p className={styles.stat__cards__card__number}>2756%</p>
        </div>

        <div className={styles.stat__cards__card}>
          <p className={styles.stat__cards__card__title}>
            фьючерсных и спотовых сделок
          </p>
          <p className={styles.stat__cards__card__number}>67</p>
        </div>

        <div className={styles.stat__cards__card}>
          <p className={styles.stat__cards__card__title}>прибыль подписчиков</p>
          <p className={styles.stat__cards__card__number}>375000</p>
        </div>
      </div>
    </div>
  );
};

export default Statistik;
