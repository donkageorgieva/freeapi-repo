import { useNavigate } from "react-router-dom";

const BackButton = ({ children }: { children?: React.ReactNode }) => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate("/");
  };
  return (
    <>
      <button
        type="button"
        className="flex items-center gap-3 text-indigo-500 cursor-pointer hover:font-bold hover:scale-105 transition-all"
        onClick={onGoBack}
      >
        {children}
      </button>
    </>
  );
};

export default BackButton;
