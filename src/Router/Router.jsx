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
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOuts></LayOuts>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivetRouts>
          <CreateAssignment></CreateAssignment>
        </PrivetRouts>
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
        path: '/update/:id',
        element: <PrivetRouts>
          <Update></Update>
        </PrivetRouts>,
        loader: ({ params }) => fetch(`https://assignment11-onlinestudy-server.vercel.app/assignment/${params.id}`)
      }
    ]
  },
]);

export default router;