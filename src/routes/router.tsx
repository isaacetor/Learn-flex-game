import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Home/Main";
import Level18 from "../page/Home/Level18"
import Level2 from "../page/Home/Level2";
import Level3 from "../page/Home/Level3";
import Level4 from "../page/Home/Level4";
import Levels9 from "../page/Home/Levels9";

import Level10 from "../page/Home/Level10";


import Level5 from "../page/Home/Level5";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path:"/level18",
    element: <Level18 />,
  },
  {
    path: "/2",
    element: <Level2 />
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
    path: "/9",
    element: <Levels9 />,
  },
{
  path:"/10",
  element:<Level10/>
}

]);
