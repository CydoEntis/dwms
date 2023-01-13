import Navbar from "./features/navigation/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./pages/feed/Feed";
import RootLayout from "./layouts/RootLayout";

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
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
