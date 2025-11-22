import styles from "./AboutCompany.module.scss";

const AboutCompany = () => {
  return (
    <div className={styles.AboutCompany}>
      <div className={styles.AboutCompany__infoBlock}>
        <h2 className={styles.AboutCompany__infoBlock_title}>О компании</h2>
        <div className={styles.AboutCompany__infoBlock_textBlock}>
          <p className={styles.AboutCompany__infoBlock_text}>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance.
            <br />
            <br />
            Он представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </p>
        </div>
      </div>

      <div className={styles.AboutCompany__sendEmail}>
        <h3 className={styles.AboutCompany__sendEmail__title}>
          Попробуйте сейчас и получите 5 дней бесплатного пользования
        </h3>

        <form className={styles.AboutCompany__sendEmail__form}>
          <input
            type="email"
            name="email"
            placeholder="Ваш e–mail"
            className={styles.AboutCompany__sendEmail__form__input}
          />
          <button
            type="submit"
            className={styles.AboutCompany__sendEmail__form__button}
          >
            Попробовать
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutCompany;
