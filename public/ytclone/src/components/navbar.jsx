import { Link } from "react-router-dom";

function Navbar({ toggleTheme, darkMode, watchLaterCount }) {
  return (
    <nav
      className="p-4 flex flex-wrap md:flex-nowrap justify-between items-center gap-4"
      style={{
        backgroundColor: darkMode ? "#1a1a1a" : "#f0f0f0",
        color: darkMode ? "#fff" : "#000",
        height: "130px",
        marginTop: "-30px",
        marginBottom: "30px",
      }}
    >
      {/* Logo and Title */}
      <div className="flex items-center gap-2 flex-shrink-0 ml-[20px] mr-[-40px] mb-[15px]">
        <img src="https://i.ibb.co/B5LrsBsH/download-removebg-preview.png" alt="logo" className="h-[65px] mt-[15px]" />
        <h1 className="font-bold">
          <Link to="/" className="no-underline" style={{ color: darkMode ? "#fff" : "black" }}>
            <span className="text-[0.7em]">Mini YouTube</span>
          </Link>
        </h1>
      </div>

      {/* Search */}
      <div className="flex-grow flex justify-center">
        <div className="flex w-full max-w-[600px]">
          <input
            type="text"
            placeholder="     Search"
            className="p-2 w-full rounded-l-full border border-gray-400 text-black"
          />
          <button className="bg-white px-4 rounded-r-full border border-gray-400 border-l-0">
            🔍
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <Link
          to="/watch-later"
          className="no-underline"
          style={{
            color: darkMode ? "#fff" : "black",
            backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
            padding: "4px 8px",
            borderRadius: "8px",
          }}
        >
          Watch Later ({watchLaterCount})
        </Link>
        <button
          onClick={toggleTheme}
          className="mr-[15px]"
          style={{ color: darkMode ? "#fff" : "black" }}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;