import {
  createBrowserRouter,
  Navigate,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useEffect, useState } from "react";
import Loader from "./pages/Loader";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Team from "./pages/Team";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Events from "./pages/Events";
import EventInfo from "./pages/EventInfo";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/welcome",
      element: (
        <MainLayout>
          <Details />
        </MainLayout>
      ),
    },
    {
      path: "/team",
      element: (
        <MainLayout>
          <Team />
        </MainLayout>
      ),
    },
    {
      path: "/about",
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      ),
    },
    {
      path: "/schedule",
      element: (
        <MainLayout>
          <Schedule />
        </MainLayout>
      ),
    },
    {
      path: "/events",
      element: (
        <MainLayout>
          <Events />
        </MainLayout>
      ),
    },
    {
      path: "/event/:eventName",
      element: (
        <MainLayout>
          <EventInfo />
        </MainLayout>
      ),
    },
    {
      path: "*",
      element: <Navigate to='/welcome' />,
    },
  ]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <RouterProvider className='select-none' router={router} />
      )}
    </>
  );
}

export default App;
