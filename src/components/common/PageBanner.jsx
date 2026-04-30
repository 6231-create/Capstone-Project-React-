export default function PageBanner({ title, breadcrumbs, img }) {
  return (
    <div className="page-banner" style={{ backgroundImage: `url('${img}')` }}>
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>{title}</h1>
        <nav className="breadcrumb-nav">
          {breadcrumbs.map((b, i) => (
            <span key={i}>
              {i > 0 && <span> / </span>}
              {b.link
                ? <a href="#" style={{ color: "var(--gold)" }}>{b.label}</a>
                : <span>{b.label}</span>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
