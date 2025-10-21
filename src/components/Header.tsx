import { site } from '../data/site';
import { useI18n } from '../i18n/I18nProvider';

const nav = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand" aria-label={`${site.name} — ${site.role}`}>
          <span className="brand-dot" /> {site.name}
        </a>
        <nav aria-label="Primary" className="nav">
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
