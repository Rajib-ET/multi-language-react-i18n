import { createBrowserRouter } from 'react-router-dom';

import { About } from '@/pages/About.jsx';
import Contact from '@/pages/Contact.jsx';
import ErrorPage from '@/pages/ErrorPage.jsx';
import ProfileSingle from '@/pages/ProfileSingle.jsx';
import Profiles from '@/pages/Profiles.jsx';
import Home from './pages/Home';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/profiles',
    element: <Profiles />,
    children: [
      {
        path: '/profiles/:profileId',
        element: <ProfileSingle />
      }
    ]
  },
]);

export default router;
