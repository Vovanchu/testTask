import styles from "./SendEmail.module.scss";
import sendEmailPhoto from "../../assets/image/sendEmail/infoUSDT.png";
import { useState } from "react";

const SendEmail = () => {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.sendEmail}>
      <div className={styles.sendEmail__info}>
        <div className={styles.sendEmail__info__textBlock}>
          <h1 className={styles.sendEmail__info__textBlock__title}>
            Моментально Копируй сделки профи трейдеров
          </h1>

          <p className={styles.sendEmail__info__textBlock__text}>
            Начни копировать сделки с успешной командой профессиональных
            трейдеров в автоматическом режиме.
          </p>
        </div>

        <form
          className={styles.sendEmail__info_input}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Відправляю email:", email);
            setEmail("");
          }}
        >
          <div className={styles.sendEmail__info_input_wrapper}>
            <input
              type="email"
              name="email"
              placeholder="Ваш e–mail"
              className={styles.sendEmail__info_input__email}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" className={styles.sendEmail__info_input__btn}>
              НАЧАТЬ
            </button>
          </div>

          <p className={styles.sendEmail__info_input__text}>
            5 дней бесплатного пользования
          </p>
        </form>
      </div>

      <div className={styles.sendEmail__photo}>
        <img
          src={sendEmailPhoto}
          alt="ETH/USDT"
          className={styles.sendEmail__photo_img}
        />
      </div>
    </div>
  );
};

export default SendEmail;
