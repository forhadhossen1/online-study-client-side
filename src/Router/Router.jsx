import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import LayOuts from "../LayOuts/LayOuts";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOuts></LayOuts>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path : '/signUp',
        element : <SignUp></SignUp>
      }
    ]
  },
]);

export default router;