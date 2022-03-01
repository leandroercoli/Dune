import ItemsList from "components/items-list";
import TemplateView from "components/template-view";
import { useData } from "hooks/useData";
import { useProfile } from "hooks/useProfile";

function Contacts() {
  const { contacts, planets } = useData();
  const { friends, addFriend, removeFriend } = useProfile();

  return (
    <TemplateView title="Contacts">
      <ItemsList
        data={contacts.map((contact) => {
          const isSaved = friends.includes(contact.id);
          return {
            name: contact.username,
            subtitle: contact.email,
            img: contact.img,
            info: [
              `${contact.title}`,
              `House ${contact.house}`,
              `Planet ${planets?.[contact.planet]?.name}`,
            ],
            save: isSaved,
            onSaveClick: isSaved
              ? () => removeFriend(contact.id)
              : () => addFriend(contact.id),
          };
        })}
        withSave
      />
    </TemplateView>
  );
}

export default Contacts;
