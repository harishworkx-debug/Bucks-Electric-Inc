import {
  createContext,
  useContext,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';

const RouterContext = createContext<string | null>(null);

function readPathname() {
  if (typeof window === 'undefined') return '/';
  const { pathname } = window.location;
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

export function RouterProvider({
  pathname,
  children,
}: {
  pathname: string;
  children: ReactNode;
}) {
  return <RouterContext.Provider value={pathname}>{children}</RouterContext.Provider>;
}

export function usePathname() {
  const contextPath = useContext(RouterContext);
  const [pathname, setPathname] = useState(readPathname);

  useEffect(() => {
    if (contextPath) {
      setPathname(contextPath);
      return;
    }
    const handleChange = () => setPathname(readPathname());
    window.addEventListener('popstate', handleChange);
    return () => window.removeEventListener('popstate', handleChange);
  }, [contextPath]);

  return contextPath || pathname;
}

export function navigate(to: string) {
  if (typeof window === 'undefined') return;
  if (to === readPathname()) return;
  window.history.pushState(null, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, left: 0 });
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { to: string };

export function Link({ to, onClick, ...rest }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
    if (event.defaultPrevented || isModifiedClick) return;
    event.preventDefault();
    navigate(to);
  };

  return <a href={to} onClick={handleClick} {...rest} />;
}
