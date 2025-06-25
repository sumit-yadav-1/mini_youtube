import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import WatchLater from "./pages/watchlater";

function App() {
  const [darkMode, setDarkMode] = useState(() => sessionStorage.getItem("theme") === "dark");
  const [watchLater, setWatchLater] = useState(() => {
    return JSON.parse(sessionStorage.getItem("watchLater")) || [];
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      sessionStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      sessionStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
  <div className={darkMode ? "dark-theme" : "light-theme"}>
    <BrowserRouter>
      <Navbar
        toggleTheme={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        watchLaterCount={watchLater.length}
      />

      <div className="main-wrapper">
        <Routes>
          <Route
            path="/"
            element={<Home watchLater={watchLater} setWatchLater={setWatchLater} darkMode={darkMode} />}
          />
          <Route
            path="/watch-later"
            element={<WatchLater watchLater={watchLater} setWatchLater={setWatchLater} darkMode={darkMode} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
);

}

export default App;