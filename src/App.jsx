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

function App() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState("/");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home key='/' />,
    },
    {
      path: "/welcome",
      element: (
        <MainLayout>
          <Details key='/welcome' />
        </MainLayout>
      ),
    },
    {
      path: "*",
      element: <Navigate to='/' />,
    },
  ]);

  router.subscribe((routerState) => {
    setState(routerState.location.pathname);
  });

  return (
    <AnimatePresence initial={false} mode='wait'>
      <RouterProvider
        key={state}
        className='select-none bg-black'
        router={router}
      />
    </AnimatePresence>
  );
}

export default App;
