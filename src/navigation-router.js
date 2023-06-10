import { createContext, useContext, useEffect, useState } from "react";

const RouterContext = createContext();

export const Router = ({ children }) => {
  // define the route.
  const [route, setRoute] = useState();

  useEffect(() => {
    window.history.replaceState(null, null, route);
  }, [route]);

  return (
    <RouterContext.Provider value={{ route, setRoute }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Link = ({ to, children }) => {
  const { setRoute } = useContext(RouterContext);

  return <div onClick={() => setRoute(to)}>{children}</div>;
};

export const Route = ({ path, children }) => {
  const { route } = useContext(RouterContext);

  return route === path ? children : null;
};
