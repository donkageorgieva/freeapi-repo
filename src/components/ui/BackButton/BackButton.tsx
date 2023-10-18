import { useNavigate } from "react-router-dom";
import ArrowBack from "../../../assets/svgs/ArrowBack";

const BackButton = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button
        className="flex items-center gap-3 text-indigo-500 cursor-pointer hover:font-bold hover:scale-105 transition-all"
        onClick={onGoBack}
      >
        <ArrowBack />
        {children}
      </button>
    </>
  );
};

export default BackButton;
