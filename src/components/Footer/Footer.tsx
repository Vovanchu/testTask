import styles from "./Footer.module.scss";
import Logo from "../../assets/image/LOGO.png";
import { HeaderItems } from "../../constants/HeaderItem";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      {/* ЛІВА КОЛОНКА */}
      <div className={styles.footer__column}>
        <h3 className={styles.footer__title}>Быстрая навигация</h3>

        <ul className={styles.footer__nav}>
          {HeaderItems.map((item) => (
            <li key={item.id} className={styles.footer__navItem}>
              <a href={item.path} className={styles.footer__navItem__link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ПРАВА КОЛОНКА */}
      <div className={styles.footer__columnRight}>
        <div className={styles.footer__logoWrapper}>
          <img src={Logo} alt="Logo" className={styles.footer__logo} />
        </div>

        <p className={styles.footer__copyright}>
          © 2022 TradeBlade. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
