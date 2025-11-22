import { useState } from "react";
import styles from "./Question.module.scss";

const faqData = [
  {
    q: "Что такое TradeBlade",
    a: "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.\n\nОн представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.",
  },
  {
    q: "Что TradeBlade предлагает инвесторам",
    a: "Да, вы можете отменить подписку в любой момент через личный кабинет.",
  },
  {
    q: "Должен ли я перевести свои средства на TradeBlade",
    a: "Да, мы предоставляем образовательный курс и поддержку в чате.",
  },
];

const Question = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.question} id="faq">
      <h2 className={styles.question__title}>часто задаваемые вопросы</h2>
      {faqData.map((item, idx) => (
        <div key={idx} className={styles.question__item}>
          <button
            className={`${styles.question__item__header} ${
              openIndex === idx ? styles.openHeader : ""
            }`}
            onClick={() => toggle(idx)}
          >
            <span>{item.q}</span>
            <span className={openIndex === idx ? styles.open : ""}>⌄</span>
          </button>

          <div
            className={`${styles.question__item__content} ${
              openIndex === idx ? styles.openContent : ""
            }`}
          >
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
