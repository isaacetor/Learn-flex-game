import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Home/Main";
import Level9 from "../page/GameLevels/Level9";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/level9",
    element: <Level9 />,
  },
]);
