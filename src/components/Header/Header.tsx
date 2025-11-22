import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/image/LOGO.png";

import { HeaderItems } from "../../constants/HeaderItem";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div
        className={`${styles.header__logo} ${
          isMenuOpen ? styles.header__logo_hidden : ""
        }`}
      >
        <img src={Logo} alt="logoPhoto" className={styles.header__logo_photo} />
      </div>

      <nav className={styles.header__nav_desktop}>
        <ul className={styles.header__nav__list}>
          {HeaderItems.map((item) => (
            <li key={item.id} className={styles.header__nav__item}>
              <a href={item.path} className={styles.header__nav__link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.header__btn_desktop}>
        <button className={styles.header__btn__login}>Вход</button>
        <button className={styles.header__btn__register}>Регистрация</button>
      </div>

      <button
        className={`${styles.header__burger} ${
          isMenuOpen ? styles.header__burger_open : ""
        }`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`${styles.header__menu_overlay} ${
          isMenuOpen ? styles.header__menu_overlay_open : ""
        }`}
      >
        <nav className={styles.header__nav_mobile}>
          <ul className={styles.header__nav__list_mobile}>
            {HeaderItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className={styles.header__nav__link_mobile}
                  onClick={toggleMenu}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.header__btn_mobile}>
          <button className={styles.header__btn__login} onClick={toggleMenu}>
            Вход
          </button>
          <button className={styles.header__btn__register} onClick={toggleMenu}>
            Регистрация
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
