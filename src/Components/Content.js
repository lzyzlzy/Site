import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ConfigContext,
  ConfigDispatchContext,
} from "../Contexts/ConfigContexts.js";
import ImageContent from "./ImageContent.js";

export default function Content() {
  let [, data] = useContext(ConfigContext);
  const dispatch = useContext(ConfigDispatchContext);
  let [searchParams] = useSearchParams();
  const key = searchParams.get("k");
  if (key) {
    dispatch({
      type: "setKey",
      key: key,
    });
  }
  const type = data?.type;

  if (type === "image") {
    return <ImageContent />;
  }
  return <div>{JSON.stringify(data)}</div>;
}
