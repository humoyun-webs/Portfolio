import type { SiteContent } from '../types';
import avatarImg from '../assets/avatar.jpeg';

export const site: SiteContent = {
  name: 'Xumoyun Eshpolatov',
  role: 'Full Stack Developer',
  location: 'Tashkent, Uzbekistan',
  bio: {
    en: 'Full Stack Developer building scalable, production‑grade applications across frontend and backend. Experienced with Node.js, NestJS, PostgreSQL, Strapi and React, Next.js, TailwindCSS. Delivered software used by 1,000+ users.',
    ru: 'Full Stack разработчик. Строю масштабируемые продакшн‑системы на бэкенде (Node.js, NestJS, PostgreSQL, Strapi) и фронтенде (React, Next.js, TailwindCSS). Приложения используют 1,000+ пользователей.',
    uz: 'Full Stack dasturchi. Backend (Node.js, NestJS, PostgreSQL, Strapi) va frontend (React, Next.js, TailwindCSS) bo‘yicha ishlab, 1,000+ foydalanuvchi ishlatadigan tizimlar yaratganman.',
  },
  email: 'humoyuneshpolatov5@gmail.com',
  phone: '+998930978020',
  avatar: avatarImg,
  socials: [
    // Update with your real profiles if different
    { name: 'GitHub', url: 'https://github.com/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/' },
    { name: 'Telegram', url: 'https://t.me/hum0_yun' },
  ],
  projects: [
    {
      title: 'pin-ag.de',
      description: {
        en: 'Client project (Berlin) with CMS workflows and modern UI components.',
        ru: 'Клиентский проект (Берлин) с CMS‑процессами и современной UI.',
        uz: 'Mijoz loyihasi (Berlin) — CMS jarayonlari va zamonaviy UI.',
      },
      tech: ['Node.js', 'Strapi', 'Next.js', 'MUI'],
      link: 'pin-ag.de',
    },
    {
      title: 'loadops.ai',
      description: {
        en: 'Extension platform for LLC companies with robust backend services.',
        ru: 'Платформа‑расширение для ООО с надежным бэкендом.',
        uz: 'MChJlar uchun kengaytma platformasi, ishonchli backend bilan.',
      },
      tech: ['NestJS', 'PostgreSQL', 'React'],
      link: 'loadops.ai',
    },
    {
      title: 'davreestr.uz',
      description: {
        en: 'National registry service in Uzbekistan with reliable APIs and optimized database operations.',
        ru: 'Национальный реестр Узбекистана: надежные API и оптимизированные БД‑операции.',
        uz: 'O‘zbekistondagi milliy reestr xizmati: ishonchli API va optimallashtirilgan ma’lumotlar bazasi.',
      },
      tech: ['NestJS', 'PostgreSQL', 'React'],
      link: 'davreestr.uz',
    },
    {
      title: 'mc.uz',
      description: {
        en: 'Official portal sharing data about the Ministry of Construction (Uzbekistan).',
        ru: 'Официальный портал с данными Министерства строительства Узбекистана.',
        uz: 'Qurilish vazirligi (O‘zbekiston) ma’lumotlari bo‘yicha rasmiy portal.',
      },
      tech: ['Node.js', 'Express.js', 'Next.js', 'TailwindCSS'],
      link: 'mc.uz',
    },
    {
      title: 'yuniygeniy.uz',
      description: {
        en: 'Landing site presenting information about a kindergarten.',
        ru: 'Лендинг с информацией о детском саде.',
        uz: 'Bog‘cha haqida ma’lumot beruvchi landing sayt.',
      },
      tech: ['Node.js', 'PostgreSQL', 'Strapi', 'React'],
      link: 'yuniygeniy.uz',
    },
  ],
  experience: [
    {
      company: 'Numeo • Seattle, Washington',
      role: {
        en: 'Software Engineer',
        ru: 'Инженер‑программист',
        uz: 'Dasturiy injener',
      },
      period: '09/2025 — Present',
      bullets: [
        {
          en: 'Contributing to backend and full‑stack features in production systems.',
          ru: 'Внёс вклад в бэкенд и full‑stack функционал в продакшн‑системах.',
          uz: 'Ishlab turgan tizimlarda backend va full‑stack funksiyalariga hissa qo‘shdim.',
        },
      ],
    },
    {
      company: 'NewproWeb • Yangiyol',
      role: {
        en: 'Full Stack Developer',
        ru: 'Full Stack разработчик',
        uz: 'Full Stack dasturchi',
      },
      period: '12/2024 — 09/2025',
      bullets: [
        { en: 'Collaborated with a Berlin‑based client on outsourced CMS projects.', ru: 'Сотрудничал с берлинским клиентом над CMS‑проектами.', uz: 'Berlinlik mijoz bilan CMS loyihalarida hamkorlik qildim.' },
        { en: 'Worked in a team with senior/mid developers and mentorship.', ru: 'Работал в команде с senior/middle разработчиками и менторством.', uz: 'Senior/middle dasturchilar bilan jamoada, mentorlash bilan ishladim.' },
        { en: 'Built solutions used by 1,000+ users with focus on scale and reliability.', ru: 'Создал решения для 1,000+ пользователей с упором на масштабируемость и надежность.', uz: '1,000+ foydalanuvchi ishlatadigan, barqaror va kengaytiriladigan yechimlar yaratdim.' },
        { en: 'Stack: Node.js, Express.js, PostgreSQL, NestJS, Strapi, React, Next.js, TailwindCSS, MUI, Chakra UI, Zustand', ru: 'Стек: Node.js, Express.js, PostgreSQL, NestJS, Strapi, React, Next.js, TailwindCSS, MUI, Chakra UI, Zustand', uz: 'Stack: Node.js, Express.js, PostgreSQL, NestJS, Strapi, React, Next.js, TailwindCSS, MUI, Chakra UI, Zustand' },
      ],
    },
    {
      company: 'Educore • Tashkent, Uzbekistan',
      role: { en: 'Node.js Developer', ru: 'Node.js разработчик', uz: 'Node.js dasturchi' },
      period: '04/2024 — 09/2024',
      bullets: [
        { en: 'Developed and maintained scalable backend services using Node.js.', ru: 'Разрабатывал и поддерживал масштабируемые бэкенд‑сервисы на Node.js.', uz: 'Node.js yordamida kengaytiriladigan backend servislarni ishlab chiqdim va qo‘llab‑quvvatladim.' },
        { en: 'Designed APIs, auth, and real‑time features.', ru: 'Проектировал API, аутентификацию и real‑time функционал.', uz: 'API, autentifikatsiya va real‑time funksiyalarni loyihalash.' },
        { en: 'Improved system performance and data security.', ru: 'Улучшил производительность и безопасность данных.', uz: 'Tizim unumdorligi va ma’lumotlar xavfsizligini yaxshiladim.' },
        { en: 'Stack: Node.js, Express.js, PostgreSQL', ru: 'Стек: Node.js, Express.js, PostgreSQL', uz: 'Stack: Node.js, Express.js, PostgreSQL' },
      ],
    },
    {
      company: 'Ministry of Construction of the Republic of Uzbekistan • Tashkent, Uzbekistan',
      role: { en: 'Backend Developer', ru: 'Backend разработчик', uz: 'Backend dasturchi' },
      period: '05/2023 — 09/2023',
      bullets: [
        { en: 'Worked on government systems using modern backend technologies.', ru: 'Работал над гос. системами с современными бэкенд‑технологиями.', uz: 'Zamonaviy backend texnologiyalari bilan davlat tizimlarida ishladim.' },
        { en: 'Implemented REST APIs and optimized database operations.', ru: 'Реализовал REST API и оптимизировал БД‑операции.', uz: 'REST API yaratdim va baza operatsiyalarini optimallashtirdim.' },
        { en: 'Stack: Node.js, Express.js, PostgreSQL, MongoDB, NestJS; Frontend: Next.js, React.js', ru: 'Стек: Node.js, Express.js, PostgreSQL, MongoDB, NestJS; Frontend: Next.js, React.js', uz: 'Stack: Node.js, Express.js, PostgreSQL, MongoDB, NestJS; Frontend: Next.js, React.js' },
      ],
    },
    {
      company: 'Profi‑team • Tashkent, Uzbekistan',
      role: { en: 'Node.js Backend Developer', ru: 'Node.js Backend разработчик', uz: 'Node.js Backend dasturchi' },
      period: '01/2023 — 03/2023',
      bullets: [
        { en: 'Contributed to a 2‑month project building backend features and ensuring API reliability.', ru: 'Участвовал в 2‑месячном проекте: бэкенд‑функционал и надежность API.', uz: '2 oylik loyihada backend funksiyalarini ishlab, API ishonchliligini ta’minladim.' },
        { en: 'Stack: Node.js, Express.js, PostgreSQL', ru: 'Стек: Node.js, Express.js, PostgreSQL', uz: 'Stack: Node.js, Express.js, PostgreSQL' },
      ],
    },
    {
      company: 'Neo‑Soft • Tashkent, Uzbekistan',
      role: { en: 'Full Stack Developer', ru: 'Full Stack разработчик', uz: 'Full Stack dasturchi' },
      period: '12/2022 — 03/2023',
      bullets: [
        { en: 'Built a complete school website in 3 months using modern stacks.', ru: 'Создал школьный сайт за 3 месяца на современном стеке.', uz: '3 oyda zamonaviy stackda maktab saytini yaratdim.' },
        { en: 'Stack: Node.js, Express.js, PostgreSQL, HTML, Sass, Bootstrap, React, Redux', ru: 'Стек: Node.js, Express.js, PostgreSQL, HTML, Sass, Bootstrap, React, Redux', uz: 'Stack: Node.js, Express.js, PostgreSQL, HTML, Sass, Bootstrap, React, Redux' },
      ],
    },
  ],
  education: [
    {
      school: 'Al‑Khwarizmi School (IT, Central Asia)',
      degree: {
        en: 'Secondary Education — IT‑focused program',
        ru: 'Среднее образование — IT‑направление',
        uz: 'O‘rta ta’lim — IT yo‘nalishi',
      },
      period: '— Graduated',
      bullets: [
        { en: 'Graduated with excellent grades.', ru: 'Окончил с отличными оценками.', uz: 'A’lo baholar bilan bitirgan.' },
        { en: 'Only dedicated IT school in Central Asia.', ru: 'Единственная специализированная IT‑школа в Центральной Азии.', uz: 'Markaziy Osiyodagi yagona ixtisoslashgan IT maktabi.' },
      ],
    },
    {
      school: 'TATU (TUIT) — Tashkent University of Information Technologies',
      degree: {
        en: 'Bachelor’s Degree — Information Technologies',
        ru: 'Бакалавриат — Информационные технологии',
        uz: 'Bakalavr — Axborot texnologiyalari',
      },
      period: '2024 — Present',
      bullets: [
        { en: 'Currently studying; part‑time (distance learning).', ru: 'В настоящее время обучаюсь; заочная (дистанционная) форма.', uz: 'Hozirda o‘qiyapman; sirtqi (masofaviy) ta’lim.' },
      ],
    },
  ],
};
