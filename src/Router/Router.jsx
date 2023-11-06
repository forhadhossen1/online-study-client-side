import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import LayOuts from "../LayOuts/LayOuts";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import CreateAssignment from "../Pages/CreateAssignment";

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
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/createAssignment',
        element : <CreateAssignment></CreateAssignment>
      }
    ]
  },
]);

export default router;