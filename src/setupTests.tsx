// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

export const mockErrorToast = jest.fn();
export const mockedUseNavigate = jest.fn();

jest.mock('react-toastify', () => ({
  ...jest.requireActual('react-toastify'),
  toast: {
    error: mockErrorToast,
  },
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
  useLocation: () => ({
    pathname: 'mockPathname',
  }),
  useSearchParams: () => [
    {
      get: () => '',
    },
  ],
  Link: () => <div></div>,
  NavLink: () => <div></div>,
  Navigate: () => <div>Mock navigate</div>
}));
