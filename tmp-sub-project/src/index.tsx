import React, { MouseEvent, SyntheticEvent } from "react";
import { render } from "react-dom";
import Button from "@fzed51/react-ui";

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

const action = (e: MouseEvent) => {
  console.log(`%cAction onClick : `, "color: red", e);
};

render(
  <div>
    <Button onClick={action}>Coucou</Button>
  </div>,
  root
);
