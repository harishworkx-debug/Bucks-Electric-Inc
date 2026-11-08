import { renderRoute } from '@/routes';
import { SiteLayout } from '@/components/SiteLayout';
import { usePathname } from '@/lib/router';

function App() {
  const pathname = usePathname();
  return <SiteLayout>{renderRoute(pathname)}</SiteLayout>;
}

export default App;
