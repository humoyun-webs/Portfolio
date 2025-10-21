import { site } from '../data/site';
import { useI18n } from '../i18n/I18nProvider';

const ensureHttps = (url?: string) => (url ? (url.startsWith('http') ? url : `https://${url}`) : undefined);
const domainOf = (url?: string) => {
  if (!url) return '';
  try {
    const u = new URL(ensureHttps(url)!);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};
const faviconFor = (url?: string) =>
  url ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domainOf(url))}&sz=64` : undefined;

function ExternalIcon() {
  return (
    <svg className="external-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14 3h7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M21 14v6a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Projects() {
  const { t, tl } = useI18n();
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">{t('projects_title')}</h2>
        <div className="grid projects-grid">
          {site.projects.map((p) => {
            const visitUrl = ensureHttps(p.link);
            const dom = domainOf(p.link);
            return (
              <article key={p.title} className="project-card card card-hover">
                {p.image && (
                  <figure className="card-media">
                    <img src={p.image} alt={`${p.title} thumbnail`} loading="lazy" />
                  </figure>
                )}
                <div className="project-head">
                  {visitUrl && (
                    <img className="favicon" src={faviconFor(visitUrl)} alt="" aria-hidden="true" />
                  )}
                  <div className="project-title">
                    <h3 className="card-title">{p.title}</h3>
                    {dom && <span className="project-domain muted">{dom}</span>}
                  </div>
                  {visitUrl && (
                    <a className="project-visit" href={visitUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${p.title}`}>
                      <ExternalIcon />
                    </a>
                  )}
                </div>
                <p className="muted">{tl(p.description)}</p>
                <div className="tags">
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

