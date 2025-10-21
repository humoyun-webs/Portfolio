import { site } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="muted">© {year} {site.name}. All rights reserved.</p>
        <nav aria-label="Footer" className="nav">
          {site.socials.map((s) => (
            <a key={s.name} className="nav-link link subtle" href={s.url} target="_blank" rel="noreferrer">
              {s.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
