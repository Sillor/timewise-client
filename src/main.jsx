import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom"
import App from './App.jsx';
import CreateAccountPage from "./timetracker/components/create-account-page/CreateAccountPage.jsx"

const div = <div>this is test</div>

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <CreateAccountPage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
