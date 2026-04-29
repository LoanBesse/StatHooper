export default function StatButton({ label, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className={`
        ${color} 
        w-full py-8 rounded-2xl 
        text-2xl font-bold text-white 
        shadow-lg 
        active:scale-95 transition-transform duration-150 select-none
      `}
    >
      {label}
    </button>
  );
}
