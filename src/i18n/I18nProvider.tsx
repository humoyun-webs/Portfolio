import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Localized } from '../types';

export type Lang = 'en' | 'ru' | 'uz';

type Dict = Record<string, string>;

type Translations = Record<Lang, Dict>;

const translations: Translations = {
  en: {
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_experience: 'Experience',
    nav_education: 'Education',
    nav_contact: 'Contact',

    hero_contact: 'Contact',

    projects_title: 'Projects',

    experience_title: 'Experience',
    education_title: 'Education',

    contact_title: 'Get in touch',
    contact_sub: 'Open to collaborations, roles, and interesting problems.',
    contact_email: 'Email me',
    contact_call: 'Call',
    lang_label: 'Language',
  },
  ru: {
    nav_about: 'Обо мне',
    nav_projects: 'Проекты',
    nav_experience: 'Опыт',
    nav_education: 'Образование',
    nav_contact: 'Контакты',

    hero_contact: 'Связаться',

    projects_title: 'Проекты',

    experience_title: 'Опыт',
    education_title: 'Образование',

    contact_title: 'Связаться',
    contact_sub: 'Открыт к сотрудничеству, ролям и интересным задачам.',
    contact_email: 'Написать',
    contact_call: 'Позвонить',
    lang_label: 'Язык',
  },
  uz: {
    nav_about: 'Haqida',
    nav_projects: 'Loyihalar',
    nav_experience: 'Tajriba',
    nav_education: 'Ta’lim',
    nav_contact: 'Aloqa',

    hero_contact: 'Bog‘lanish',

    projects_title: 'Loyihalar',

    experience_title: 'Tajriba',
    education_title: 'Ta’lim',

    contact_title: 'Aloqa',
    contact_sub: 'Hamkorlik, ish takliflari va qiziqarli loyihalarga ochiqman.',
    contact_email: 'Email yozish',
    contact_call: 'Qo‘ng‘iroq',
    lang_label: 'Til',
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  tl: (loc: Localized) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const t = useMemo(() => (key: string) => {
    const dict = translations[lang] ?? translations.en;
    return dict[key] ?? translations.en[key] ?? key;
  }, [lang]);

  const tl = useMemo(() => (loc: Localized) => {
    if (!loc) return '';
    return loc[lang] ?? loc.en ?? '';
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, tl }), [lang, t, tl]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
