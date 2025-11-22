// Tariffs.tsx
import { useState } from "react";
import styles from "./Tariffs.module.scss";

type TariffCard = {
  id: string;
  title: string;
  price: number;
  discount: string;
  features: string[];
  trialDays: number;
  isVip: boolean;
};

type TariffType = "spot" | "futures";

type TariffData = Record<TariffType, TariffCard[]>;

const Tariffs = () => {
  const [activeTab, setActiveTab] = useState<TariffType>("spot");
  const [selectedMonths, setSelectedMonths] = useState<Record<string, number>>({
    std: 12,
    vip: 12,
  });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const data: TariffData = {
    spot: [
      {
        id: "std",
        title: "STANDART",
        price: 234,
        discount: "-35%",
        features: [
          "Ручной трейдинг",
          "Автоматическое или полуавтоматическое копирование сделок",
          "Личный кабинет со статистикой",
          "Среднесрочные сделки с уровнями набора портфеля",
        ],
        trialDays: 5,
        isVip: false,
      },
      {
        id: "vip",
        title: "VIP",
        price: 585,
        discount: "-35%",
        features: [
          "Ручной трейдинг",
          "Автоматическое или полуавтоматическое копирование сделок",
          "Личный кабинет со статистикой",
          "Краткосрочные, среднесрочные и инвест сделки",
          "Доступ в Vip чат с командой",
          "Наш авторский курс по трейдингу",
        ],
        trialDays: 5,
        isVip: true,
      },
    ],
    futures: [],
  };

  const handleMonthSelect = (cardId: string, months: number) => {
    setSelectedMonths((prev) => ({ ...prev, [cardId]: months }));
    setOpenDropdown(null);
  };

  return (
    <div className={styles.tariffs} id="tariffs">
      <div className={styles.container}>
        <h2 className={styles.title}>ТАРИФЫ</h2>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tabBtn} ${
              activeTab === "spot" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("spot")}
          >
            СПОТ
          </button>
          <button
            className={`${styles.tabBtn} ${
              activeTab === "futures" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("futures")}
          >
            ФЬЮЧЕРС
          </button>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          {data[activeTab].map((card) => (
            <div
              key={card.id}
              className={`${styles.card} ${card.isVip ? styles.vipCard : ""}`}
            >
              <h3 className={styles.cardTitle}>{card.title}</h3>

              <div className={styles.features}>
                {card.features.map((feat, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    <p className={styles.featureText}>{feat}</p>
                  </div>
                ))}
              </div>

              <div className={styles.priceBlock}>
                <div className={styles.priceWrapper}>
                  <span className={styles.price}>${card.price}</span>
                  <span className={styles.discount}>{card.discount}</span>
                </div>

                <div className={styles.dropdownWrapper}>
                  <button
                    className={styles.monthBtn}
                    onClick={() =>
                      setOpenDropdown(openDropdown === card.id ? null : card.id)
                    }
                  >
                    {selectedMonths[card.id]} месяцев
                    <span className={styles.arrow}>▼</span>
                  </button>

                  {openDropdown === card.id && (
                    <div className={styles.dropdown}>
                      {[1, 3, 6, 12].map((months) => (
                        <div
                          key={months}
                          className={`${styles.dropdownItem} ${
                            selectedMonths[card.id] === months
                              ? styles.selected
                              : ""
                          }`}
                          onClick={() => handleMonthSelect(card.id, months)}
                        >
                          {months} {months === 1 ? "месяц" : "месяцев"}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button className={styles.tryBtn}>ПОПРОБОВАТЬ</button>

              <p className={styles.trialText}>
                {card.trialDays} дней бесплатно
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
