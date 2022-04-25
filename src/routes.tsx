import React from "react";
import { Route, Routes } from "react-router-dom";

import Jobs from "src/pages/Jobs";
import PageNotFoundPage from "./pages/PageNotFound";

const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="jobylon">
          <Route element={<Jobs />} index />
          <Route path="jobs" element={<Jobs />} />
        </Route>

        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
