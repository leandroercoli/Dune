import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFriends,
  addFriend as addFriendStore,
  removeFriend as removeFriendStore,
} from "store/profile/profileSlice";

export const useProfile = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);

  const addFriend = useCallback(
    (friendId: number) => dispatch(addFriendStore(friendId)),
    [dispatch]
  );

  const removeFriend = useCallback(
    (friendId: number) => dispatch(removeFriendStore(friendId)),
    [dispatch]
  );

  useEffect(() => {
    if (friends.length) localStorage.setItem("friends", friends.join(" "));
    else localStorage.removeItem("friends");
  }, [friends]);

  return {
    friends,
    addFriend,
    removeFriend,
  };
};
