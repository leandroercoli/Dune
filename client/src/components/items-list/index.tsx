import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

type Item = {
  name: string;
  subtitle?: string;
  img?: string;
  info?: string[];
  save?: boolean;
  onSaveClick?: () => void;
};

export default function ItemsList({
  data = [],
  withSave,
}: {
  data: Item[];
  withSave?: boolean;
}) {
  return (
    <ul className="items-list-container">
      {data.map((item, idx) => (
        <Fragment key={`contact-${idx}`}>
          <li>
            <div>
              <img src={item.img} alt="contact" />
            </div>
            <h2>{item.name}</h2>
            <em>{item.subtitle}</em>
            <div>
              <span>{item.info?.join(" - ")}</span>
            </div>
            {withSave && (
              <div style={{ cursor: "pointer" }} onClick={item.onSaveClick}>
                <FontAwesomeIcon
                  icon={item.save ? faHeartSolid : faHeart}
                  size="lg"
                />
              </div>
            )}
          </li>
          {idx < data.length - 1 && <div className="separator" />}
        </Fragment>
      ))}
    </ul>
  );
}
