import { Link } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { BsPersonCircle } from 'react-icons/bs';
import { GrReactjs } from 'react-icons/gr';
import { RiLogoutBoxRLine } from 'react-icons/ri';
const Header = () => {
  const { token, onSignOut, username } = useAuth();
  return (
    <div className='bg-white flex justify-between p-4 items-center border-b border-slate-500'>
      <span className='md:hidden'></span>
      <Link className='absolute top-4 left-1/2 -translate-x-1/2 md:static md:translate-x-0' to={'/'}>
        <GrReactjs className='text-slate-500 text-4xl' />
      </Link>
      <div>
        {!token ? (
          <Link className='button button-outlined' to={'/sign-in'}>
            <BsPersonCircle className='text-2xl md:text-base' />
            <span className='hidden md:inline'>Sign In</span>
          </Link>
        ) : (
          <div className='flex gap-4 items-center'>
            <span className='hidden md:inline'>Welcome {username} </span>
            <button className='button button-outlined' onClick={onSignOut}>
              <RiLogoutBoxRLine className='text-2xl md:text-base' />
              <span className='hidden md:inline'>Sign Out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
