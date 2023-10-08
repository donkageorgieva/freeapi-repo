import Card from "../../components/ui/Card/Card";
import LinkButton from "../../components/ui/LinkButton/LinkButton";

const HomeScreen = () => {
  return (
    <main className="flex justify-center items-center h-screen  bg-gradient-to-tl from-violet-900 via-indigo-500 to-blue-300">
      <section className="lg:w-4/12 ">
        <Card>
          <h1 className="text-3xl font-bold mb-2">
            Discover a World of Public APIs
          </h1>
          <p className="mb-2">
            Welcome to a vast repository of public APIs. Log in for advanced
            features or continue as a guest to start exploring instantly. Join
            us today and unleash the power of APIs for your projects and ideas.
          </p>
          <div className="flex gap-2">
            <LinkButton to="login">Login</LinkButton>
            <LinkButton to="dashboard">Continue as Guest</LinkButton>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default HomeScreen;
