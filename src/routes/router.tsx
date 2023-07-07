import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Home/Main";
import Level14 from "../page/Home/Level14";
import Level18 from "../page/Home/Level18"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },

  {
    path:"/level14",
    element: <Level14 />,
  },
  {
    path:"/level18",
    element: <Level18 />,
  }
]);
