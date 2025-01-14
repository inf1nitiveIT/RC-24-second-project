import { Link } from 'react-router-dom';

type NavLinkProps = {
  text: string;
  to: string;
}

function NavLink({text, to}: NavLinkProps) {
  return(
    <li>
      <Link to={to} className='text-lg hover:text-[#D4AF37] hover:underline transition-all duration-300 ease-in-out'>
        {text}
      </Link>
    </li>
  );
}

export default NavLink;
