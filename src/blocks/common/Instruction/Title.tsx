import { gameData } from "../../../util/types";
import { FC } from "react";

const Title: FC<gameData> = ({ titleText }) => {
  return (
    <div>
      <p>{titleText}</p>
    </div>
  );
};

export default Title;
