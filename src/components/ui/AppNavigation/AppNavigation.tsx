import ArrowBack from "../../../assets/svgs/ArrowBack";
import { useNavigate } from "react-router-dom";
const AppNavigation = () => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(-1);
  };
  return (
    <nav className="bg-white shadow-xl py-4 fixed w-full top-0 px-4 xl:px-0 ">
      <div className="container mx-auto">
        <button
          className="flex items-center gap-3 text-indigo-500 cursor-pointer hover:font-bold hover:scale-105 transition-all"
          onClick={onGoBack}
        >
          <ArrowBack />
          Back
        </button>
      </div>
    </nav>
  );
};

export default AppNavigation;
