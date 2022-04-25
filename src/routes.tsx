import React from "react";
import { Route, Routes } from "react-router-dom";

import Jobs from "src/pages/Jobs";
import PageNotFoundPage from "./pages/PageNotFound";

const Router: React.FC = () => {
  return (
    <>
      {/* <Suspense fallback={<Preloader />}> */}
      <Routes>
        <Route path="/">
          <Route element={<Jobs />} index />
        </Route>

        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
};

export default Router;
