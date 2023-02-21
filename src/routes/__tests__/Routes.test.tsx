import { render, screen } from '@testing-library/react'
import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router-dom';
import AuthLayout from 'components/Layout/AuthLayout';
import MainLayout from 'components/Layout/MainLayout';
import '@testing-library/jest-dom'


describe('Route', () => {
  test('should render AuthLayout', async () => {
    render(
      <BrowserRouter>
        <AppRoutes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<div>Auth Layout</div>} />
          </Route>
        </AppRoutes>
      </BrowserRouter>
    );
    expect(screen.getByText('Auth Layout')).toBeInTheDocument();
  })

  test('should render MainLayout', async () => {
    render(
      <BrowserRouter>
        <AppRoutes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<div>Main Layout</div>} />
          </Route>
        </AppRoutes>
      </BrowserRouter>
    );
    expect(screen.getByText('Main Layout')).toBeInTheDocument();
  })
})