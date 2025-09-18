import { useEffect } from 'react';

function ensureMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  return el;
}

function setMetaByName(name, content) {
  const el = document.head.querySelector(`meta[name="${name}"]`) || ensureMeta(`meta[name="${name}"]`, { name });
  el.setAttribute('content', content || '');
}

function setMetaByProperty(property, content) {
  const el = document.head.querySelector(`meta[property="${property}"]`) || ensureMeta(`meta[property="${property}"]`, { property });
  el.setAttribute('content', content || '');
}

export default function SEO({ siteName, title, description, keywords, noIndex }) {
  useEffect(() => {
    const site = siteName || 'Century Finance Limited';
    const pageTitle = title ? `${title} | ${site}` : site;
    document.title = pageTitle;
    if (description !== undefined) setMetaByName('description', description);
    if (keywords !== undefined) setMetaByName('keywords', keywords);
    // Enforce noindex, nofollow on all pages
    setMetaByName('robots', 'noindex, nofollow');

    setMetaByProperty('og:title', pageTitle);
    if (description !== undefined) setMetaByProperty('og:description', description);
    setMetaByProperty('og:type', 'website');
    setMetaByProperty('twitter:card', 'summary');
    setMetaByProperty('twitter:title', pageTitle);
    if (description !== undefined) setMetaByProperty('twitter:description', description);

    try {
      const canonicalHref = window.location.origin + window.location.pathname;
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalHref);
    } catch (e) {
      // ignore for non-browser environments
    }
  }, [siteName, title, description, keywords]);

  return null;
}
