import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { isLoggedIn } from "./timetracker/utils/authHandler.js";
import App from "./App.jsx";
import CreateAccountPage from "./timetracker/pages/create-account-page/CreateAccountPage.jsx";
import TimesheetMain from "./timetracker/pages/time-sheet/TimesheetMain.jsx";
import ResetPassword from "./timetracker/pages/reset-password/ResetPassword.jsx";
import Users from "./timetracker/pages/users-page/Users.jsx";
import CreateProjectPage from "./timetracker/pages/create-project-page/CreateProjectPage.jsx";
import PageNotFound from "./timetracker/pages/404-page/404-page.jsx";
import ConfirmPasswordReset from "./timetracker/pages/confirm-password-reset/ConfirmPasswordReset.jsx";
import TempLogin from "./timetracker/pages/login-page/TempLogin.jsx";

function checkLoggedIn() {
  const loggedIn = isLoggedIn();
  if (loggedIn) return { loggedIn };
  return redirect("/login");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        errorElement: <PageNotFound />,
        children: [
          {
            index: true,
            loader: async () => {
              const loggedIn = isLoggedIn();
              if (loggedIn) return redirect("/tracker");
              return redirect("/login");
            },
            // possibly replace with splash page
            element: (
              <h1 className="text-4xl font-bold flex items-center justify-center text-white">
                Hello TimeWise!
              </h1>
            ),
          },
          {
            path: "/register",
            element: <CreateAccountPage />,
          },
          {
            path: "/login",
            element: <div><TempLogin /></div>,
          },
          {
            path: "/users",
            element: <Users />,
            loader: () => {
              return checkLoggedIn();
            }
          },
          {
            path: "/resetpassword",
            element: <ResetPassword />,
          },
          {
            path: "/tracker",
            element: <TimesheetMain />,
            loader: () => {
              return checkLoggedIn();
            },
          },
          {
            path: "/account",
            element: <div>account <button onClick={async ()=>(await import("./timetracker/utils/authHandler.js")).logout()}>logout</button></div>,
          },
          {
            path: "/projects",
            element: <CreateProjectPage />,
            loader: () => {
              return checkLoggedIn();
            }
          },
          {
            path: "/confirmresetpassword",
            element: <ConfirmPasswordReset />,
          },
          {
            path: "/*",
            element: <PageNotFound />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
