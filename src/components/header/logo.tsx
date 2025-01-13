import { Link } from 'react-router-dom';
import { PagesLinks } from '../../utils/const';

function Logo() {
  return(
    <Link to={PagesLinks.MAIN}>
      <p className='text-[#D4AF37] font-bold text-2xl'>Pairwise</p>
    </Link>
  );
}

export default Logo;
