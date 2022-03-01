import SpaceDivider from "components/space-divider";
import TemplateView from "components/template-view";
import FormCard from "components/form-card";
import { useData } from "hooks/useData";
import { useProfile } from "hooks/useProfile";
import { useMemo } from "react";
import { useHistory, useLocation } from "react-router";

function Home() {
  const history = useHistory();
  const { contacts, myPlanet } = useData();
  const { friends } = useProfile();

  const contactFriends = useMemo(
    () => contacts.filter((contact) => friends.includes(contact.id)),
    [contacts, friends]
  );

  return (
    <TemplateView>
      <FormCard
        iconLabel={myPlanet.name?.slice(0, 1)}
        label={`My planet, ${myPlanet.name}.`}
        onClick={() => {
          history.push("/planets");
        }}
        style={{ cursor: "pointer" }}
      >
        <em>{myPlanet.quote}</em>
        <span>Environment: {myPlanet.environment}</span>
        <span>Day length: {myPlanet.day_length}</span>
        <SpaceDivider />
        <div className="form-card-image-container">
          <img src={myPlanet.img} alt={`${myPlanet.name}`} />
        </div>
      </FormCard>
      <FormCard
        iconLabel={friends.length}
        label={"My friends"}
        onClick={() => {
          history.push("/contacts");
        }}
        style={{ cursor: "pointer" }}
      >
        <em>
          You have {friends.length} friend{friends.length !== 1 ? "s" : ""}.
        </em>
        <div className="scrollable-list-horizontal">
          {contactFriends.map((friend) => (
            <div
              className="scrollable-list-thumbnail-item"
              key={`friend-${friend.id}`}
            >
              <div>
                <img src={friend.img} alt="contact" />
              </div>
              <span>{friend.username}</span>
            </div>
          ))}
        </div>
      </FormCard>
    </TemplateView>
  );
}

export default Home;
