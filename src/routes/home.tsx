import manualLawLogo from '~/assets/manual-law-logo.jpg';
import manuelImage from '~/assets/manuel.jpg';
import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconPhoneCall,
  IconClock,
} from '@tabler/icons-react';
import { LanguageSwitch } from '~/components/LanguageSwitch';
import { useTranslation } from '~/hooks/useTranslation';

export function Home() {
  const t = useTranslation();
  
  return (
    <div className="flex max-h-screen w-full flex-col items-center overflow-scroll bg-blue-50">
      <header className="flex w-full items-center justify-center py-4">
        <img src={manualLawLogo} alt="Manuel Law Logo" className="h-40 object-contain" />
      </header>

      <LanguageSwitch />

      <div className="bg-secondary text-secondary-content mt-4 mb-10 w-screen py-5 text-center text-3xl font-semibold">
        {t('servingAllStates')}
      </div>

      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 px-3 md:grid-cols-2 md:gap-8">
        {/* contact panel */}
        <div className="card bg-base-100 flex flex-col items-center gap-3 p-4">
          <IconPhoneCall size={32} />

          <div className="text-base-content text-xl font-bold">{t('contact')}</div>

          <div className="text-secondary text-xl font-bold underline underline-offset-4">
            <a href="tel:855-767-6580">855-767-6580</a>
          </div>

          <div className="flex w-full flex-row justify-between pt-4">
            <a
              href="https://instagram.com/fg_immigration"
              className="bg-secondary rounded-full p-2"
              target="__blank"
            >
              <IconBrandInstagramFilled className="text-secondary-content" />
            </a>

            <a
              href="https://www.linkedin.com/company/figueroa-global-immigration-llc/"
              className="bg-secondary rounded-full p-2"
              target="__blank"
            >
              <IconBrandLinkedinFilled className="text-secondary-content" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61573697917990#"
              className="bg-secondary rounded-full p-2"
              target="__blank"
            >
              <IconBrandFacebookFilled className="text-secondary-content" />
            </a>
          </div>
        </div>

        {/* hours panel */}
        <div className="card bg-base-100 flex flex-col items-center gap-3 p-4 text-lg font-semibold">
          <IconClock size={32} />

          <div className="text-base-content text-xl font-bold">{t('hours')}</div>

          <span>{t('monFri')}</span>

          <span>{t('satSun')}</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 px-3 py-10 md:mx-auto md:max-w-4xl md:px-0">
        <div className="flex w-full items-center md:col-span-3 justify-center">
          <div className="flex h-fit flex-col items-center gap-4 align-middle justify-center max-w-sm">
            <img
              src={manuelImage}
              alt="Manuel Figueroa"
              className="w-full rounded-lg object-cover"
            />

            <div className="text-center">
              <span className="text-base-100 text-xl font-semibold">{t('manuelFigueroa')}</span>
              <br />
              <span className="text-base-100">{t('attorney')}</span>
            </div>
          </div>
        </div>

        <div className="bg-base-100 col-span-5 mt-4 p-6 md:mt-0 md:ml-6 text-blue-100">
          <p className="text-secondary text-xl capitalize">
            {t('empower')}
          </p>
          <div className="bg-secondary my-4 h-1 w-[30%]" />
          {t('about')
            .split(/\n{2,}/)
            .map((paragraph, idx) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}
        </div>
      </div>

      <div className="mt-auto w-full bg-black px-8 py-2 text-white">
        {t('disclaimer')}
      </div>

      <div className="bg-base-100 text-base-content w-full p-6 text-center text-sm">
        {t('copyright')}
      </div>
    </div>
  );
}
