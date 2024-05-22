interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  secondary?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  secondary = false,
  children,
}) => {
  const buttonClass = secondary
    ? "bg-blue-500 hover:bg-blue-700"
    : "bg-yellow-500 hover:bg-yellow-700";

  const textClass = secondary ? "font-medium" : "font-bold text-xl";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClass} ${textClass} text-white py-2 px-4 rounded-lg shadow-lg ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
