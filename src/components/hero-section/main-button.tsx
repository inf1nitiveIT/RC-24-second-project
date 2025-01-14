import { Link } from 'react-router-dom';

type ButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

function MainButton({ to, children, className }: ButtonProps) {
  return(
    <Link to={to} className="text-white font-bold">
      <div className={`flex justify-center items-center ${className}`}>
        {children}
      </div>
    </Link>
  );
}

export default MainButton;
