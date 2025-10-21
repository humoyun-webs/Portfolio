import { site } from '../data/site';
import { useI18n } from '../i18n/I18nProvider';
import { useState } from 'react';

const nav = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand" aria-label={`${site.name} — ${site.role}`}>
          <span className="brand-dot" /> {site.name}
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-controls="primary-nav"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <nav id="primary-nav" aria-label="Primary" className={`nav ${open ? 'open' : ''}`}>
          {nav.map((n) => (
            <button key={n.id} className="nav-link" onClick={() => handleNav(n.id)}>
              {t(`nav_${n.id}`)}
            </button>
          ))}
          <select
            aria-label={t('lang_label')}
            className="nav-link"
            value={lang}
            onChange={(e) => setLang(e.target.value as any)}
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
        </nav>
      </div>
    </header>
  );
}
