import { useParams } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthScreen = () => {
  const { type } = useParams();
  if (type?.trim() !== "login" && type?.trim() !== "register") return;

  return (
    <main className="flex justify-center items-center h-screen  bg-gradient-to-tl from-violet-900 via-indigo-500 to-blue-300">
      <section className=" md:container mx-auto px-4 xl:px-0 flex justify-center ">
        <AuthForm formType={type} />
      </section>
    </main>
  );
};

export default AuthScreen;
