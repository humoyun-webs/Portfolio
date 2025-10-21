import { site } from '../data/site';
import { useI18n } from '../i18n/I18nProvider';

export default function Experience() {
  const { t, tl } = useI18n();
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">{t('experience_title')}</h2>
        <div className="stack lg">
          {site.experience.map((e) => (
            <article key={e.company + e.role} className="exp">
              <header className="exp-header">
                <div>
                  <h3 className="exp-role">{tl(e.role)}</h3>
                  <p className="exp-company muted">{e.company}</p>
                </div>
                <time className="muted exp-period">{e.period}</time>
              </header>
              <ul className="exp-list">
                {e.bullets.map((b, i) => (
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
