import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {

  const navigate = useNavigate();

  const loginHandler = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Library Login</h2>

      <button onClick={loginHandler}>
        Login
      </button>
    </div>
  );
}

export default Login;
