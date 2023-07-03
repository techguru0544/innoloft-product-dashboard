import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('components/common/Header'));

const AppLayout = () => (
  <>
    <Suspense fallback="loading...">
      <Header />
    </Suspense>
    <main role="main" className="min-h-[calc(100vh-55px)]">
      <Outlet />
    </main>
  </>
);

export default AppLayout;
