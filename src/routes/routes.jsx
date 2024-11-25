import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const NotFound = lazy(() => import('@/components/NotFound'));
const Home = lazy(() => import('@/components/Home'));
const About = lazy(() => import('@/components/About'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/howitworks',
    element: <HowItWorks />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
