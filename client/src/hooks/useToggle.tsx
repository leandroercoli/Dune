import { useState } from "react";

export const useToggle = (
  defaultState: boolean = true
): [boolean, () => void] => {
  const [isToggledOn, setIsToggledOn] = useState<boolean>(defaultState);

  const toggle = () => {
    setIsToggledOn(!isToggledOn);
  };

  return [isToggledOn, toggle];
};
