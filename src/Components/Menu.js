import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ConfigContext,
  ConfigDispatchContext,
} from "../Contexts/ConfigContexts.js";

export default function Menu() {
  const [config, data] = useContext(ConfigContext);
  const dispatch = useContext(ConfigDispatchContext);
  const navigate = useNavigate();

  function setMenuKey(key) {
    dispatch({
      type: "setKey",
      key: key,
    });
    navigate("/");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        <a href="https://liuzhenyu.net">{config.name}</a>
      </h1>
      <div className="text-sm mt-1 text-gray-900">
        {config.subTitle.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-3 font-medium">
        <ul className="list-decimal list-inside">
          {config.menu.map((item) => (
            <li key={item.key}>
              <button
                className={`hover:font-bold ${
                  data.key === item.key ? "font-bold" : ""
                }`}
                onClick={() => setMenuKey(item.key)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 font-medium">
        <p className="hover:font-bold">
          <Link to={"about"}>About</Link>
        </p>
      </div>
      <div className="mt-3 underline">
        {config.links.map((link) => (
          <p key={link.name} className="hover:font-bold">
            <a href={link.src}>{link.name}</a>
          </p>
        ))}
      </div>
    </div>
  );
}
