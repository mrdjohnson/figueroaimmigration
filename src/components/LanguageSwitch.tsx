import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const LanguageSwitch = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  {
    /* english / spanish switch */
  }
  return (
    <div className="flex w-full items-center justify-center px-4">
      <div className="bg-base-100 flex gap-2 rounded-full p-1">
        <Link
          to="/"
          className={twMerge(
            'hover:bg-secondary hover:text-secondary-content flex items-center gap-1 rounded-full px-3 py-1 text-2xl',
            !isEnglish && 'decoration-secondary underline underline-offset-4'
          )}
        >
          🇪🇸
        </Link>

        <Link
          to="/en"
          className={twMerge(
            'hover:bg-secondary hover:text-secondary-content flex items-center gap-1 rounded-full px-3 py-1 text-2xl',
            isEnglish && 'decoration-secondary underline underline-offset-4'
          )}
        >
          🇺🇸
        </Link>
      </div>
    </div>
  );
};
