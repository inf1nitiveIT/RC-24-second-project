interface ResetButtonProps {
  handler: () => void;
}

function ResetButton({handler}: ResetButtonProps) {
  return(
    <button
      onClick={handler}
      className="bg-[#1A1A1A] w-52 h-12 rounded-3xl border-2 border-[#D4AF37] text-white font-semibold transition-all duration-300 ease-in-out hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
    >
          Restart the game
    </button>
  );
}

export default ResetButton;
