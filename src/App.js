import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import routes from "./pages/routes";
import React from "react";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <React.Suspense fallback={"loading"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route exact path="/" element={<Navigate to="/home" />} />
            {routes.map(({ component: Component, path, ...props }, index) => {
              return (
                <Route
                  key={index}
                  element={<Component />}
                  path={path}
                  {...props}
                />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
