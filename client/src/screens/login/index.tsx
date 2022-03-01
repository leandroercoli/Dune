import { useState, MouseEvent } from "react";
import LOGO_IMG from "assets/img/dune-logo.png";
import Icon from "components/icons";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Input from "components/input";
import { getBackground } from "./utils";
import { useAuth } from "hooks/useAuth";
import Alert from "components/alert";
import { useToggle } from "hooks/useToggle";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const canSubmit = email && password;
  const [isPasswordVisible, togglePasswordVisibility] = useToggle(false);

  const {
    tryLogin: { login, isLoginRejected },
  } = useAuth();

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <div className="login-container">
      <div className="form">
        <img src={LOGO_IMG} alt="logo arrakis" className="login-logo" />
        <h1>Sign in</h1>
        <form>
          <Input
            placeholder="User"
            value={email || ""}
            onChange={(u: string) => setEmail(u)}
            required
            endAdornment={
              <div style={{ display: "contents", opacity: email ? 1 : 0.5 }}>
                <Icon name="user" />
              </div>
            }
          />
          <Input
            endAdornment={
              <div
                className="end-adornment-clickable"
                style={{
                  display: "contents",
                  opacity: isPasswordVisible ? 1 : 0.5,
                }}
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            }
            onChange={(p: string) => setPassword(p)}
            required
            placeholder="Password"
            type={isPasswordVisible ? "text" : "password"}
          />
          <button
            type="submit"
            className="button-submit"
            disabled={!canSubmit}
            onClick={handleSubmit}
          >
            Sign in
            <ChevronRightIcon />
          </button>
          {isLoginRejected && (
            <Alert severity="fail" className="no-margin">
              Incorrect user or password.
            </Alert>
          )}
        </form>
      </div>
      <img
        src={getBackground()}
        alt="login background"
        className="background"
      />
    </div>
  );
}

export default Login;
