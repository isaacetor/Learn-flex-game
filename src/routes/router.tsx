import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Home/Main";
import Level2 from "../page/Home/Level2";
import Level3 from "../page/Home/Level3";
import Level4 from "../page/Home/Level4";
import Level9 from "../page/GameLevels/Level9";
import Level6 from "../page/Home/Level6";
import Level5 from "../page/Home/Level5";
import Level7 from "../page/Home/Level7"
import Level8 from "../page/Home/Level8";
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
    path:"/level6",
    element: <Level6 />,
  },
  {
    path:"/level7",
    element: <Level7 />,
  },
  {
    path:"/level8",
    element: <Level8 />,
  },
  {
    path: "/level9",
    element: <Level9 />,
  },
]);
