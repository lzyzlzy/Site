import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "./Contexts/ConfigContexts";
import Content from "./Components/Content.js";
import Layout from "./Components/Layout.js";

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

function About() {
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

export default App;
