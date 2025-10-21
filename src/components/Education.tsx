import { site } from '../data/site';
import { useI18n } from '../i18n/I18nProvider';

export default function Education() {
  const { t, tl } = useI18n();
  if (!site.education || site.education.length === 0) return null;
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">{t('education_title')}</h2>
        <div className="stack lg">
          {site.education.map((ed) => (
            <article key={ed.school + ed.period} className="exp">
              <header className="exp-header">
                <div>
                  <h3 className="exp-role">{tl(ed.degree)}</h3>
                  <p className="exp-company muted">{ed.school}</p>
                </div>
                <time className="muted exp-period">{ed.period}</time>
              </header>
              <ul className="exp-list">
                {ed.bullets.map((b, i) => (
                  <li key={i}>{tl(b)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
