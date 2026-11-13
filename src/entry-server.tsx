import { renderToString } from 'react-dom/server';
import { SiteLayout } from './components/SiteLayout';
import { renderRoute } from './routes';
import { RouterProvider } from './lib/router';
import { getPageSeo, getAllRoutes, type PageSeo } from './lib/seoData';

export function render(pathname: string): { html: string; seo: PageSeo } {
  const html = renderToString(
    <RouterProvider pathname={pathname}>
      <SiteLayout>{renderRoute(pathname)}</SiteLayout>
    </RouterProvider>
  );

  const seo = getPageSeo(pathname);
  return { html, seo };
}

export { getAllRoutes };

