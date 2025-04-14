import { Provider } from "react-redux";
import { app } from "../app";
import { DependenciesProvider } from "./DependenciesProvider";

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Provider store={app.store}>
    <DependenciesProvider depedencies={app.dependencies}>
      {children}
    </DependenciesProvider>
  </Provider>
);
