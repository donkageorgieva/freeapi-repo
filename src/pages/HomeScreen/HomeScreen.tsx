import { Link } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import LinkButton from "../../components/ui/LinkButton/LinkButton";

const HomeScreen = () => {
  return (
    <main className="flex justify-center items-center h-screen  bg-gradient-to-tl from-violet-900 via-indigo-500 to-blue-300">
      <section className=" md:container mx-auto px-4 xl:px-0 flex justify-center w-full">
        <Card classNames=" xl:w-2/5 sm:w-4/5 md:w-3/5   md:h-auto">
          <h1 className="text-3xl font-bold mb-2">
            Discover a World of Public APIs
          </h1>
          <p className="mb-2">
            Welcome to a vast repository of public APIs. Log in for advanced
            features or continue as a guest to start exploring instantly. Join
            us today and unleash the power of APIs for your projects and ideas.
          </p>
          <div className="flex gap-2">
            <LinkButton to="auth/login">Login</LinkButton>
            <LinkButton to="repository" secondary={true}>
              Continue as Guest
            </LinkButton>
          </div>
          <div className="py-4">
            <Link to="auth/register" className="text-indigo-600 ">
              Don't have an account?
              <span className="ml-2 decoration-4 hover:underline underline-offset-4 font-bold transition-all">
                Sign up
              </span>
            </Link>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default HomeScreen;
