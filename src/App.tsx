import { renderRoute, isStandaloneRoute } from '@/routes';
import { SiteLayout } from '@/components/SiteLayout';
import { usePathname } from '@/lib/router';
import { USE_LANDING_PAGE_AS_HOME } from '@/siteMode';
import { StandaloneLandingPage } from '@/standalone-landing/StandaloneLandingPage';

function App() {
  const pathname = usePathname();

  // If one-click switcher is enabled for root "/", or if accessing standalone routes directly:
  if ((USE_LANDING_PAGE_AS_HOME && (pathname === '/' || pathname === '')) || isStandaloneRoute(pathname)) {
    return <StandaloneLandingPage />;
  }

  return <SiteLayout>{renderRoute(pathname)}</SiteLayout>;
}

export default App;
