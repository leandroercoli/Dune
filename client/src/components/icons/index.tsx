import ClearIcon from "./clear-icon";
import GithubIcon from "./github-icon";
import HamburgerIcon from "./hamburger-icon";
import UserIcon from "./user-icon";
import LogoutIcon from "./logout-icon";

interface IconProps {
  onClick?: () => any;
  name: "clear" | "github" | "hamburger-icon" | "user" | "logout";
  size?: "s" | "m" | "l";
}

export default function Icon({ name, size = "m", onClick }: IconProps) {
  return (
    <div
      className={`icon-${size} ${onClick ? "button-icon" : ""}`}
      {...{ onClick }}
    >
      {getIconByName(name)}
    </div>
  );
}

function getIconByName(name: string) {
  switch (name) {
    case "clear":
      return <ClearIcon />;
    case "github":
      return <GithubIcon />;
    case "hamburger-icon":
      return <HamburgerIcon />;
    case "user":
      return <UserIcon />;
    case "logout":
      return <LogoutIcon />;
    default:
      return;
  }
}
