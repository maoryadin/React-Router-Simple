import { createContext, useContext, useEffect, useState } from "react";

const CreateRouterContext = () => {
  const context = createContext(undefined);

  const useRoute = () => {
    const contextValue = useContext(context);

    if (contextValue === undefined) {
      throw new Error("useRoute must be used within a RouteProvider");
    }
    return contextValue;
  };

  return [useRoute, context.Provider];
};

const [useRoute, RouterContext] = CreateRouterContext();

export const Router = ({ children }) => {
  // define the route.
  const [route, setRoute] = useState();

  useEffect(() => {
    window.history.replaceState(null, null, route);
  }, [route]);

  return <RouterContext value={{ route, setRoute }}>{children}</RouterContext>;
};

export const Link = ({ to, children }) => {
  const { setRoute } = useRoute(RouterContext);

  return <div onClick={() => setRoute(to)}>{children}</div>;
};

export const Route = ({ path, children }) => {
  const { route } = useRoute(RouterContext);

  return route === path ? children : null;
};
