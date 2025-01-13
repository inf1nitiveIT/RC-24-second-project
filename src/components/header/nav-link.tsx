import { Link } from 'react-router-dom';

type NavLinkProps = {
  text: string;
  to: string;
}

function NavLink({text, to}: NavLinkProps) {
  return(
    <li>
      <Link to={to} className='text-lg'>
        {text}
      </Link>
    </li>
  );
}

export default NavLink;
