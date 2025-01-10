import NavLink from './nav-link';
import { navigationLinks } from '../../utils/const';

function Navigation() {
  return(
    <nav>
      <ul className='flex gap-20'>
        {navigationLinks.map((link) =>
          <NavLink key={link.id} text={link.text} to={link.to} />
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
