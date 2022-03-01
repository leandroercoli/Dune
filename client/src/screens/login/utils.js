import moment from "moment";
import BACKGROUND_IMG_1 from "assets/img/arrakis-poster.jpg";
import BACKGROUND_IMG_2 from "assets/img/arrakis-poster-2.jpg";

export const getBackground = () => {
  const randomBackground = (moment().day() % 2) + 1;
  switch (randomBackground) {
    case 1:
      return BACKGROUND_IMG_1;
    case 2:
      return BACKGROUND_IMG_2;
    default:
      return BACKGROUND_IMG_1;
  }
};
