import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import "./App.scss";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <Router>
      <div data-theme={theme}>
        <button onClick={switchTheme}>click</button>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
