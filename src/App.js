import "./App.css";
import { ConfigProvider } from "./Contexts/ConfigContexts";
import Content from "./Components/Content.js";
import MenuBar from "./Components/MenuBar.js";

function App() {
  return (
    <ConfigProvider>
      <div className="flex flex-col md:flex-row">
        <MenuBar />
        <Content />
      </div>
    </ConfigProvider>
  );
}

export default App;
