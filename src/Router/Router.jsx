import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import LayOuts from "../LayOuts/LayOuts";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import CreateAssignment from "../Pages/CreateAssignment";
import Assignment from "../Pages/Assignment";
import MyAssignment from "../Pages/MyAssignment";
import SubmitedAss from "../Pages/SubmitedAss";
import PrivetRouts from "./PrivetRouts";
import Update from "../Pages/Update";

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
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/createAssignment',
        element: <CreateAssignment></CreateAssignment>
      },
      {
        path: '/assignment',
        element: <Assignment></Assignment>
      },
      {
        path: '/myAssignment',
        element: <PrivetRouts>
          <MyAssignment></MyAssignment>
        </PrivetRouts>
      },
      {
        path: '/submitedAssignment',
        element: <PrivetRouts>
          <SubmitedAss></SubmitedAss>
        </PrivetRouts>
      },
      {
        path : '/update/:id',
        element : <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
      }
    ]
  },
]);

export default router;