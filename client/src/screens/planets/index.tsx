import SpaceDivider from "components/space-divider";
import TemplateView from "components/template-view";
import FormCard from "components/form-card";
import { useData } from "hooks/useData";

function Planets() {
  const { planets, myPlanet } = useData();

  console.log("planets, my planet", planets, myPlanet);

  return (
    <TemplateView title={"Planets"}>
      {Object.values(planets)
        .sort((planet1, planet2) => (planet1.name > planet2.name ? 1 : -1))
        .map((planet) => (
          <FormCard
            iconLabel={planet.name?.slice(0, 1)}
            label={planet.name}
            className={myPlanet.id === planet.id ? "form-card-accent" : ""}
            key={`planet-card-${planet.id}`}
          >
            <em>{planet.quote}</em>
            <span>Environment: {planet.environment}</span>
            <span>Day length: {planet.day_length}</span>
            <SpaceDivider />
            <div className="form-card-image-container">
              <img src={planet.img} alt={`${planet.name}`} />
            </div>
          </FormCard>
        ))}
    </TemplateView>
  );
}

export default Planets;
