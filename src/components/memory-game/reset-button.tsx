interface ResetButtonProps {
  handler: () => void;
}

function ResetButton({handler}: ResetButtonProps) {
  return(
    <button
      onClick={handler}
      className="bg-[#1A1A1A] w-52 h-12 rounded-3xl border-2 border-[#D4AF37] text-white font-semibold"
    >
          Restart the game
    </button>
  );
}

export default ResetButton;
