export const APP_NAME = "Dune";

export const ROUTE_GROUP_HOME = "HOME";
export const ROUTE_GROUP_PLANET = "PLANET";
export const ROUTE_GROUP_PROFILE = "PROFILE";

export const ROUTES = [
  {
    subgroup: ROUTE_GROUP_HOME,
    links: [{ label: "Home", link: "/" }],
  },
  {
    subgroup: ROUTE_GROUP_PLANET,
    links: [
      { label: "Planets", link: "/planets" },
      { label: "Contacts", link: "/contacts" },
    ],
  },
];

// regex: /path-base/123 -> /path-base
export function isRouteValid(route) {
  const [pathBase] = route.match(/^\/(\w*-?)*/g) || [] || [];
  return (
    pathBase === "" ||
    pathBase === "/login" ||
    !!ROUTES.find(({ links }) => links.find(({ link }) => link === pathBase))
  );
}
