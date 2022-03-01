import Icon from "components/icons";
import { useAuth } from "hooks/useAuth";

interface UserBadgeProps {
  onClick?: () => any;
}

function UserBadge({ onClick }: UserBadgeProps) {
  const {
    loggedUser: { user },
  } = useAuth();
  return (
    <div className="user-badge-wrapper" onClick={onClick}>
      {user?.username}
      <div className="user-badge" data-testid="user-badge">
        <Icon name="user" />
      </div>
    </div>
  );
}

export default UserBadge;
