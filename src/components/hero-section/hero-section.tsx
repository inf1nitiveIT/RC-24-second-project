import { Link } from 'react-router-dom';
import { PagesLinks } from '../../utils/const';

type ButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

function HeroSection() {
  const Button = ({ to, children, className }: ButtonProps) => (
    <Link to={to} className="text-white text-2xl font-bold">
      <div className={`flex justify-center items-center ${className}`}>
        {children}
      </div>
    </Link>
  );

  return (
    <div className="flex flex-col justify-center items-center space-y-4 mt-[150px] ">
      <div className="flex justify-center items-center w-64 h-64 bg-[#1A1A1A] text-white text-5xl font-bold rounded-full border-2 border-[#D4AF37] shadow-lg mb-[50px]">
        Find<br />The<br />Pair
      </div>
      <Button
        to={PagesLinks.GAME}
        className="bg-[#1A1A1A] w-60 h-16 rounded-3xl border-2 border-[#D4AF37]"
      >
        START THE GAME
      </Button>
      <Button
        to={PagesLinks.RULES}
        className="bg-[#1A1A1A] w-52 h-12 rounded-3xl border-2 border-[#D4AF37]"
      >
        RULES
      </Button>
    </div>
  );
}

export default HeroSection;
