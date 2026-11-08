import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react';

function readPathname() {
  const { pathname } = window.location;
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

export function usePathname() {
  const [pathname, setPathname] = useState(readPathname);

  useEffect(() => {
    const handleChange = () => setPathname(readPathname());
    window.addEventListener('popstate', handleChange);
    return () => window.removeEventListener('popstate', handleChange);
  }, []);

  return pathname;
}

export function navigate(to: string) {
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
