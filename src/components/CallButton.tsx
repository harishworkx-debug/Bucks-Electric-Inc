import { Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

interface CallButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const VARIANT_CLASS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
} as const;

export function CallButton({
  label = `Call ${SITE.phoneDisplay}`,
  variant = 'primary',
  className = '',
}: CallButtonProps) {
  return (
    <a href={SITE.phoneHref} className={`${VARIANT_CLASS[variant]} ${className}`.trim()}>
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      {label}
    </a>
  );
}
