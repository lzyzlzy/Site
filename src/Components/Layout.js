import { Outlet} from "react-router-dom";
import Menu from "./Menu.js";

export default function Layout() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-none p-8 font-mono antialiased">
        <Menu />
      </div>
      <div className="grow p-0.5 md:ml-9">
        <Outlet />
      </div>
    </div>
  );
}
