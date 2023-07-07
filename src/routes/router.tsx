import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Home/Main";
import Level14 from "../page/Home/Level9";
import Level9 from "../page/Home/Level9";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },

  {
    path:"/level14",
    element: <Level9/>,
  }
]);
