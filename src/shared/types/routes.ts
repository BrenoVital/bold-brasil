export type RouteConfig = {
  [key: string]: {
    name: string;
    icon: JSX.Element;
    children?: RoutesChildren;
  };
};

type RoutesChildren = {
  [key: string]: {
    name: string;
  };
};
