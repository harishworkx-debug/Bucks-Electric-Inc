import { CallButton } from '@/components/CallButton';

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-700 bg-navy-900 p-3 shadow-[0_-8px_24px_rgba(10,26,51,0.25)] md:hidden">
      <CallButton className="w-full py-3" />
    </div>
  );
}
