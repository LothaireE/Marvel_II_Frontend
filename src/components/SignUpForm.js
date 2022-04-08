import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/CSS/SignUpForm.css";

const SignUpForm = ({ apiUrl }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log("handleSubmit");

    try {
      event.preventDefault();
      if (password !== confirmPassword) {
        setErrorPassword(true);
      } else {
        setErrorPassword(false);
        console.log([username, email, password]);
        const response = await axios.post(`${apiUrl}/users/signup`, {
          username: username,
          email: email,
          password: password,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className="form-block" onSubmit={(event) => handleSubmit(event)}>
      <div className="sub-form">
        <div className="form-line">
          <span>Username</span>
          <input
            value={username}
            placeholder="Bruce Banner"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-line">
          <span>Email</span>
          <input
            value={email}
            type="email"
            placeholder="theHulk@avengers.io"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-line">
          <span>Password</span>
          <input
            className={errorPassword && "error"}
            value={password}
            type={"password"}
            placeholder="haIlHYdrA3945"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-line">
          <span>Confirm password</span>
          <input
            className={errorPassword && "error"}
            value={confirmPassword}
            type={"password"}
            placeholder="haIlHYdrA3945"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        {errorPassword && (
          <div>
            <span>Passwords must not be differents</span>
          </div>
        )}
        <button onClick={handleSubmit}>Signu up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
