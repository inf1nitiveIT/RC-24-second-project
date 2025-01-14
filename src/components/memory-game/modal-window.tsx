import { PagesLinks } from '../../utils/const';
import MainButton from '../hero-section/main-button';
import ResetButton from './reset-button';

interface ModalProps {
  title: string;
  message: string;
  onClose: () => void;
}

function ModalWindow({ title, message, onClose }: ModalProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-md text-center border-2 border-[#D4AF37]">
        <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
        <p className="mb-4 text-white">{message}</p>
        <ResetButton handler={onClose}/>
        <MainButton
          to={PagesLinks.MAIN}
          className="bg-[#1A1A1A] w-24 h-12 rounded-3xl border-2 border-[#D4AF37] mt-2 mx-auto transition-all duration-300 ease-in-out hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
        >
        Exit
        </MainButton>
      </div>
    </div>
  );
}

export default ModalWindow;
