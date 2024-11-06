export const locales = ["en-us", "zh-cn"] as const;
export type Locale = (typeof locales)[number];
