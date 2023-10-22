import ArrowBack from "../../../assets/svgs/ArrowBack";
import BackButton from "../BackButton/BackButton";
const AppNavigation = () => {
  return (
    <nav className="bg-white shadow-xl py-4 fixed w-full top-0 px-4 xl:px-0 ">
      <div className="container mx-auto">
        <BackButton>
          <ArrowBack /> Back
        </BackButton>
      </div>
    </nav>
  );
};

export default AppNavigation;
