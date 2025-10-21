import { site } from '../data/site';
import { useI18n } from '../i18n/I18nProvider';

export default function Hero() {
  const { t, tl } = useI18n();
  return (
    <section id="about" className="section hero">
      <div className="container">
        {site.avatar && (
          <img
            src={site.avatar}
            alt={`${site.name} portrait`}
            className="avatar"
            loading="eager"
          />
        )}
        <p className="eyebrow">{site.role}</p>
        <h1 className="headline">{site.name}</h1>
        {site.location && (
          <p className="muted" style={{ marginTop: 4 }}>{site.location}</p>
        )}
        <p className="subhead">{tl(site.bio)}</p>
        <div className="inline">
          <a className="btn" href={`mailto:${site.email}`}>{t('hero_contact')}</a>
          <div className="stack inline-gap">
            {site.socials.map((s) => (
              <a key={s.name} className="link subtle" href={s.url} target="_blank" rel="noreferrer">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
