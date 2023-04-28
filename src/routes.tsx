import IndexPage from './pages/IndexPage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import { FormPage } from './pages/FormPage';
import { Page } from './components/Page';

export const routes = [
  {
    path: '/',
    element: <Page />,
    children: [
      {
        path: '/',
        element: <IndexPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'form',
        element: <FormPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
];
