export interface HeaderItem {
  id: number;
  title: string;
  path: string;
}

export const HeaderItems: HeaderItem[] = [
  { id: 1, title: "Цыфры", path: "#numbers" },
  { id: 2, title: "Сделки онлайн", path: "#deals" },
  { id: 3, title: "о компании", path: "#about" },
  { id: 4, title: "как начать", path: "#start" },
  { id: 5, title: "тарифы", path: "#tariffs" },
  { id: 7, title: "отзывы", path: "#reviews" },
  { id: 6, title: "FAQ", path: "#faq" },
];
