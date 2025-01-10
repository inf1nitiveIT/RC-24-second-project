import Logo from './logo';
import Navigation from './navigation';

function Header() {
  return (
    <div className='flex justify-between px-10 py-5 text-white text-xl font-semibold'>
      <Logo />
      <Navigation />
    </div>
  );
}

export default Header;
