import React, { Fragment } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "assets/img/dune-logo-black-background.jpg";
import Icon from "components/icons";
import { useRouting } from "hooks/useRouting";
import { useAuth } from "hooks/useAuth";
import GithubBadge from "components/github-badge";

interface DashboardSidebarProps {
  isOpen?: boolean;
  onClose?: () => any;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isOpen,
  onClose = () => {},
}) => {
  let history = useHistory();
  const onLogoClick = () => {
    history.push("/");
  };
  const { routes } = useRouting();
  const { logout } = useAuth();

  return (
    <div
      className={`dashboard-sidebar ${isOpen ? "active" : ""}`}
      data-testid="dashboard-sidebar"
    >
      <div className="sidebar-header" onClick={onLogoClick}>
        <img src={logo} alt="logo" className="header-logo" />
        <div className="close-button" onClick={onClose}>
          <Icon name="clear" />
        </div>
      </div>
      <div className="sidebar-content">
        {routes.map(({ links = [] }: { links: any[] }, idx) => (
          <Fragment key={`route-${idx}`}>
            {links.map(({ label, link }: any, idx) => (
              <NavLink
                key={`navlink-${idx}`}
                to={link}
                exact={link === "/"}
                onClick={() => {
                  onClose();
                }}
              >
                <span>{label}</span>
              </NavLink>
            ))}
            {idx < routes.length - 1 && (
              <div className="separator" key={`separator=${idx}`} />
            )}
          </Fragment>
        ))}
      </div>
      <GithubBadge />
      <button className="button-logout" onClick={logout}>
        Log Out
        <Icon name="logout" />
      </button>
    </div>
  );
};

export default DashboardSidebar;
