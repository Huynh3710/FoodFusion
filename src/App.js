import logo from "./logo.svg";
import { Suspense } from "react";
import { Route, Router, Routes } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import routes from "./config/Routes";
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={
                route.protected ? (
                  <ProtectedRoute activeRoles={route.roles}>
                    {route.layout}
                  </ProtectedRoute>
                ) : (
                  route.layout
                )
              }
            >
              {route.index && <Route index element={route.index} />}
              {route.children.map((child, cidx) => (
                <Route key={cidx} path={child.path} element={child.element} />
              ))}
            </Route>
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
