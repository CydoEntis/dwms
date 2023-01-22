import Navbar from "./features/navigation/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./pages/feed/Feed";
import RootLayout from "./layouts/RootLayout";
import Authentication from "./pages/authentication/Authentication";
import { useState } from "react";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/feed", // Eventually Change to /feed route.
          element: <Feed />,
        },
      ],
    
    },
    {
      path: "/auth",
      element: <Authentication />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
