import * as React from 'react';
import { Routes as AppRoutes, Route } from 'react-router-dom';
import CommonPage from 'pages/CommonPage';
import SignInPage from 'pages/SignInPage';
import NotFound from 'pages/NotFound';
import ProtectedRoute from 'routes/ProtectedRoute';
import MainLayout from 'components/Layout/MainLayout';
import AuthLayout from 'components/Layout/AuthLayout';

const Routes: React.FC = () => {
  return (
    <AppRoutes>
      <Route element={<MainLayout />}>
        <Route path={"/"} element={<CommonPage text={'Public page 1'} />} />
        <Route path={"/public-1"} element={<CommonPage text={'Public page 1'} />} />
        <Route path={"/public-2"} element={<CommonPage text={'Public page 2'} />} />
        <Route path={"/public-3"} element={<CommonPage text={'Public page 3'} />} />
        <Route path={"/public-4"} element={<CommonPage text={'Public page 4'} />} />

        <Route path={"/private-1"} element={
          <ProtectedRoute>
            <CommonPage text={'Private page 1'} />
          </ProtectedRoute>}
        />

        <Route path={"/private-2"} element={
          <ProtectedRoute>
            <CommonPage text={'Private page 2'} />
          </ProtectedRoute>}
        />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={"/sign-in"} element={<SignInPage />} />
        <Route path={"*"} element={<NotFound />} />
      </Route>
    </AppRoutes>
  );
};

export default Routes;

