import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  const sizeClasses = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  return (
    <button
      className={`border mt-3 bg-purple-700 text-white ${sizeClasses[size]} ${shape}`}
    >
      {title}
    </button>
  );
};

export default Button;
