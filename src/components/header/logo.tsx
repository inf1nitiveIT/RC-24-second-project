import { Link } from 'react-router-dom';
import { PagesLinks } from '../../utils/const';

function Logo() {
  return(
    <Link to={PagesLinks.MAIN}>
      <p>Pairwise</p>
    </Link>
  );
}

export default Logo;
