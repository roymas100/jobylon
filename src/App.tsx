import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

import Hooks from "./shared/hooks";

import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <Hooks>
      <AppRoutes />
    </Hooks>
  );
};

export default App;
