import ResetButton from './reset-button';

interface ModalProps {
  title: string;
  message: string;
  onClose: () => void;
}

function ModalWindow({ title, message, onClose }: ModalProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-md text-center border-2 border-[#D4AF37]">
        <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
        <p className="mb-4 text-white">{message}</p>
        <ResetButton handler={onClose}/>
      </div>
    </div>
  );
}

export default ModalWindow;
