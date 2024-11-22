import Sidebar from '@/components/Sidebar'
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  np: { nativeName: 'नेपाली' }
};

function App() {
  const { t, i18n  } = useTranslation();
  console.log(t);

  return (
    <div className='p-6'>
    <div className='flex gap-2 justify-center items-center'>
          {Object.keys(lngs).map((lng) => (
            <button className={` px-4 py-2 rounded-md ${i18n.resolvedLanguage === lng ? 'bg-blue-600 text-white' : 'bg-blue-50'}`} key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              <span>{lngs[lng].nativeName}</span>
            </button>
          ))}
        </div>
      {/* <Sidebar /> */}
      <Trans i18nKey='welcome'>
          Welcome, <strong>User</strong>!
      </Trans>
      <h1>Heading 1</h1>
      <div>
        {t('welcomeMessage', {
          count: 4,
        })}
      </div>
    </div>
  )
}

export default App
