import React, { useState } from "react";
import Home from "./components/Home";
import LoadingPage from "./components/LoadingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import NewNote from "./components/NewNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },

  {
    path: "/create",
    element: (
      <div>
        <NewNote />
      </div>
    ),
  },
]);
const App = () => {
  const [homeComponent, setHomeComponent] = useState(false);
  setTimeout(() => {
    setHomeComponent(true);
  }, 1300);
  if (homeComponent === true) {
    return (
      <>
        <RouterProvider router={router}>
          <Home />
        </RouterProvider>
      </>
    );
  } else {
    return <LoadingPage />;
  }
};

export default App;
