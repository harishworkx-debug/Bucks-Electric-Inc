import { renderToString } from 'react-dom/server';
import { SiteLayout } from './components/SiteLayout';
import { renderRoute, isStandaloneRoute } from './routes';
import { RouterProvider } from './lib/router';
import { getPageSeo, getAllRoutes, type PageSeo } from './lib/seoData';
import { USE_LANDING_PAGE_AS_HOME } from './siteMode';
import { StandaloneLandingPage } from './standalone-landing/StandaloneLandingPage';
import { getStandaloneSeoMetadata } from './standalone-landing/seo/landingSeo';

export function render(pathname: string): { html: string; seo: PageSeo } {
  const isStandalone = (USE_LANDING_PAGE_AS_HOME && pathname === '/') || isStandaloneRoute(pathname);

  let html: string;
  let seo: PageSeo;

  if (isStandalone) {
    html = renderToString(
      <RouterProvider pathname={pathname}>
        <StandaloneLandingPage />
      </RouterProvider>
    );

    const meta = getStandaloneSeoMetadata(pathname);
    seo = {
      title: meta.title,
      description: meta.description,
      path: pathname,
      canonical: meta.canonical,
      jsonLd: [meta.schema],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    };
  } else {
    html = renderToString(
      <RouterProvider pathname={pathname}>
        <SiteLayout>{renderRoute(pathname)}</SiteLayout>
      </RouterProvider>
    );

    seo = getPageSeo(pathname);
  }

  return { html, seo };
}

export { getAllRoutes };

