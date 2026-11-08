import { useEffect } from 'react';
import { SITE } from '@/lib/site';

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object[];
  noindex?: boolean;
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function removeCanonical() {
  document.head.querySelector('link[rel="canonical"]')?.remove();
}

function upsertJsonLd(json: string) {
  let element = document.head.querySelector<HTMLScriptElement>('script[data-page-jsonld]');
  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-page-jsonld', '');
    document.head.appendChild(element);
  }
  element.textContent = json;
}

export function useSeo({ title, description, path, jsonLd = [], noindex = false }: SeoOptions) {
  const jsonLdKey = JSON.stringify(jsonLd);

  useEffect(() => {
    const url = path ? `${SITE.url}${path}` : SITE.url;
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    if (noindex) {
      removeCanonical();
    } else {
      upsertCanonical(url);
    }
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE.name);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', SITE.heroImage);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', SITE.heroImage);
    upsertJsonLd(jsonLdKey);
  }, [title, description, path, jsonLdKey, noindex]);
}
