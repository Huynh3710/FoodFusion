import { Outlet } from "react-router-dom";
import Login from "../component/Authentication/Login";

//fake authentication layout
const AuthenLayout = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Outlet />
    </div>
  );
};

//fake login component

//fake registration component
const Registration = () => {
  return <div>Registration</div>;
};

//index is default route for the "parent" route

const routes = [
  {
    path: "/authentication",
    layout: <AuthenLayout />,
    index: <Login />,
    children: [
      {
        path: "login",
        element: <Login />,
        index: true,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
];

export default routes;
