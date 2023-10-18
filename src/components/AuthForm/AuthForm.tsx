interface Props {
  type: string;
}
const AuthForm = ({ type }: Props) => {
  return (
    <form>
      <h1>Auth form {type}</h1>
    </form>
  );
};

export default AuthForm;
