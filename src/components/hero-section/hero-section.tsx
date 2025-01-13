import { PagesLinks } from '../../utils/const';
import MainButton from './main-button';


function HeroSection() {

  return (
    <div className="flex flex-col justify-center items-center space-y-4 mt-[150px] ">
      <div className="flex justify-center items-center w-64 h-64 bg-[#1A1A1A] text-white text-5xl font-bold rounded-full border-2 border-[#D4AF37] shadow-lg mb-[50px] text-center">
        <div>
          <span className='block'>FIND </span>
          <span className='block'>THE</span>
          <span className='block'>PAIR</span>
        </div>
      </div>
      <MainButton
        to={PagesLinks.GAME}
        className="bg-[#1A1A1A] w-60 h-16 rounded-3xl border-2 border-[#D4AF37]"
      >
        START THE GAME
      </MainButton>
      <MainButton
        to={PagesLinks.RULES}
        className="bg-[#1A1A1A] w-52 h-12 rounded-3xl border-2 border-[#D4AF37]"
      >
        RULES
      </MainButton>
    </div>
  );
}

export default HeroSection;
