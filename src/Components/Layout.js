import { useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  ConfigContext,
  ConfigDispatchContext,
} from "../Contexts/ConfigContexts.js";

export default function Layout() {
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
    <div className="flex flex-col md:flex-row">
      <div className="flex-none p-8 font-mono antialiased">
        <h1 className="text-3xl font-bold underline">
          <a href="https://liuzhenyu.net">{config.name}</a>
        </h1>
        <div className="text-sm mt-1 text-gray-900">
          {config.subTitle.map((line) => (
            <p>{line}</p>
          ))}
        </div>
        <div className="mt-3 font-medium">
          <ul className="list-decimal list-inside">
            {config.menu.map((item) => (
              <li>
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
            <p className="hover:font-bold">
              <a href={link.src}>{link.name}</a>
            </p>
          ))}
        </div>
      </div>
      <div className="grow p-0.5 md:ml-9">
        <Outlet />
      </div>
    </div>
  );
}
