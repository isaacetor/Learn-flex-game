import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Home/Main";
import Level14 from "../page/Home/Level14";
import Level5 from "../page/Home/Level5";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },

  {
    path:"/level5",
    element: <Level5 />,
  },
  {
    path:"/level14",
    element: <Level14 />,
  }
]);
