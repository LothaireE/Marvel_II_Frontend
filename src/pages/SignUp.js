import "../assets/CSS/SignUp.css";
import SignUpForm from "../components/SignUpForm";

const SignUp = ({ apiUrl }) => {
  return (
    <div className="container">
      <h1>SignUp</h1>
      <SignUpForm apiUrl={apiUrl} />
    </div>
  );
};
export default SignUp;
