import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import CreateAccountPage from "./timetracker/components/create-account-page/CreateAccountPage.jsx";
import TimesheetMain from "./timetracker/TimesheetMain.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error was thrown in App</div>,
    children: [
      {
        errorElement: <div>Error was thrown in outlet</div>,
        children: [
          {
            index: true,
            loader: async () => {
              const isLoggedIn = true;
              if (isLoggedIn) return redirect("/tracker");
              else return redirect("/login");
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
            element: <div>login</div>,
          },
          {
            path: "/tracker",
            element: <TimesheetMain />,
          },
          {
            path: "/account",
            element: <div>account</div>,
          },
          {
            path: "/projects",
            element: <div>projects</div>,
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
