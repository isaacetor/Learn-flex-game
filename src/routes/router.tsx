import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Home/Main";
import Level2 from "../page/Home/Level2";
import Level3 from "../page/Home/Level3";
import Level4 from "../page/Home/Level4";
import Level9 from "../page/GameLevels/Level9";

import Level14 from "../page/Home/Level14";
import Level5 from "../page/Home/Level5";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/2",
    element: <Level2 />,
  },
  {
    path: "/3",
    element: <Level3 />,
  },
  {
    path: "/4",
    element: <Level4 />,
  },
  {
    path:"/level5",
    element: <Level5 />,
  },
  {
    path: "/level9",
    element: <Level9 />,
  },
]);
