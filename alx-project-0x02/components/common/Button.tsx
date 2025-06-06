import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`border px-3 py-1 text-lg mt-3 bg-purple-700 text-white ${styles}`}>
      {title}
    </button>
  );
};

export default Button;