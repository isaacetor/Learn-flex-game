import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Home/Main";

import Levels9 from "../page/Home/Levels9";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {

    path: "/level9",
    element: <Levels9 />,
  },
]);
