import React from "react";
import data from "./mocks";

const MockContext = React.createContext({});

function MockProvider(props) {
  return <MockContext.Provider value={data} {...props} />;
}

function useMocks() {
  const context = React.useContext(MockContext);
  if (context === undefined) {
    throw new Error(`useMocks must be used within a MockProvider`);
  }
  return context;
}

export { MockProvider, useMocks };
