import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "./Contexts/ConfigContexts";
import Content from "./Components/Content.js";
import Layout from "./Components/Layout.js";
import About from "./About.js";

function App() {
  return (
    <ConfigProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
