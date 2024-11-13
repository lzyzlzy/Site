import { useContext } from "react";
import {
  ConfigDispatchContext,
} from "./Contexts/ConfigContexts.js";

export default function About() {
  const dispatch = useContext(ConfigDispatchContext);
  dispatch({
    type: "setKey",
    key: "",
  });

  return (
    <div>
      <h1>About</h1>
      <p>
        This is a simple image gallery app built with React. It uses the
        react-image-gallery package to display images. The app is styled with
        Tailwind CSS.
      </p>
    </div>
  );
}
