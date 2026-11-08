import { ChevronDown } from 'lucide-react';
import { Link } from '@/lib/router';

export interface NavChild {
  to: string;
  label: string;
}

interface NavDropdownProps {
  to: string;
  label: string;
  children: NavChild[];
  isActive: boolean;
}

export function NavDropdown({ to, label, children, isActive }: NavDropdownProps) {
  return (
    <div className="group relative">
      <Link
        to={to}
        aria-current={isActive ? 'page' : undefined}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
          isActive ? 'bg-navy-50 text-navy-900' : 'text-navy-700 hover:bg-navy-50 hover:text-navy-900'
        }`}
      >
        {label}
        <ChevronDown
          className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <ul className="overflow-hidden rounded-xl border border-navy-100 bg-white p-2 shadow-xl">
          {children.map((child) => (
            <li key={child.to}>
              <Link
                to={child.to}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50 hover:text-navy-900"
              >
                {child.label}
              </Link>
            </li>
          ))}
          <li className="mt-1 border-t border-navy-100 pt-1">
            <Link
              to={to}
              className="block rounded-lg px-4 py-3 text-sm font-bold text-navy-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {`View all ${label.toLowerCase()}`}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
