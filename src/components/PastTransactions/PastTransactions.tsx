import { useState, useRef } from "react";
import styles from "./PastTransactions.module.scss";
import PastTransactionsData from "../../constants/PastTransactions";

const PastTransactions = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const updateScrollIndicator = () => {
    const container = scrollRef.current;
    const thumb = thumbRef.current;
    if (!container || !thumb) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const progress = container.scrollLeft / maxScrollLeft;

    const barWidth = container.clientWidth * 0.3;
    const thumbWidth = barWidth * 0.4;
    const maxMove = barWidth - thumbWidth;

    thumb.style.transform = `translateX(${progress * maxMove}px)`;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
      updateScrollIndicator();
    }
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleScroll = () => updateScrollIndicator();

  return (
    <div className={styles.pastTransactions} id="pastTransactions">
      <div className={styles.header}>
        <h1 className={styles.title}>ПРОШЕДШИЕ СДЕЛКИ</h1>
        <div className={styles.status}>
          <span className={styles.statusDot}></span>
          Онлайн
        </div>
      </div>

      <div
        ref={scrollRef}
        className={styles.cards}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {PastTransactionsData.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.pair}>{item.pair}</h3>
              <p className={styles.type}>
                {item.type} · {item.timeSpoted}
              </p>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.profitLabel}>ПРИБЫЛЬ</p>
              <p className={styles.profitValue}>{item.profit}</p>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.target}>Цель {item.target}</span>
              <span className={styles.date}>{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollBar}>
          <div ref={thumbRef} className={styles.scrollThumb}></div>
        </div>
      </div>
    </div>
  );
};

export default PastTransactions;
