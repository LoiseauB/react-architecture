import { createContext, useContext } from "react";
import { Dependencies } from "../../store/dependencies";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DependenciesContext = createContext<Dependencies>(null as any);

export const DependenciesProvider: React.FC<{
  depedencies: Dependencies;
  children: React.ReactNode;
}> = ({ depedencies, children }) => {
  return (
    <DependenciesContext.Provider value={depedencies}>
      {children}
    </DependenciesContext.Provider>
  );
};

export const useDependencies = () => useContext(DependenciesContext);
