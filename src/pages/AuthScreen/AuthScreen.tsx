import { useParams } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthScreen = () => {
  const { type } = useParams();
  if (type?.trim() !== "login" && type?.trim() !== "signup") return;

  return (
    <main className=" container mx-auto px-4 xl:px-0">
      <AuthForm type={type} />
    </main>
  );
};

export default AuthScreen;
