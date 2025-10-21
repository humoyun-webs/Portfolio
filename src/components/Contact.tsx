import { site } from '../data/site';
import { useI18n } from '../i18n/I18nProvider';

export default function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="section">
      <div className="container contact">
        <h2 className="section-title">{t('contact_title')}</h2>
        <p className="muted">{t('contact_sub')}</p>
        <div className="stack">
          <a className="btn" href={`mailto:${site.email}`}>{t('contact_email')}</a>
          {site.phone && (
            <a className="btn" href={`tel:${site.phone.replace(/\s|\(|\)|-/g, '')}`}>{t('contact_call')}: {site.phone}</a>
          )}
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
