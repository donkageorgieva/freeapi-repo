import { useParams } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthScreen = () => {
  const { type } = useParams();
  if (type?.trim() !== "login" && type?.trim() !== "signup") return;

  return (
    <main className="flex justify-center items-center h-screen  bg-gradient-to-tl from-violet-900 via-indigo-500 to-blue-300">
      <section className=" container mx-auto px-4 xl:px-0 ">
        <AuthForm type={type} />
      </section>
    </main>
  );
};

export default AuthScreen;
