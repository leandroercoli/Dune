import UserBadge from "components/user-badge";
import Icon from "components/icons";
import DashboardSidebar from "components/dashboard-sidebar";
import { useToggle } from "hooks/useToggle";

function Header() {
  const [isSidebarOpen, toggleSidebar] = useToggle(false);

  return (
    <>
      <div className="header">
        <Icon name="hamburger-icon" onClick={toggleSidebar} />
        <div>
          <UserBadge />
        </div>
      </div>
      <DashboardSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}

export default Header;
