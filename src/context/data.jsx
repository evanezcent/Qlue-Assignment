import React from "react";

const DataContext = React.createContext(null);

function useContextData() {
  const context = React.useContext(DataContext);
  return context;
}

function DataProvider({ children, ...props }) {
  const [data_provider, setDataProvider] = React.useState([]);

  return (
    <DataContext.Provider value={{ data_provider, setDataProvider }} {...props}>
      {children}
    </DataContext.Provider>
  );
}

export { useContextData, DataProvider };
