import { useEffect, useState } from "react";
import Switch from "../../UI/Switch";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = ({ showAll }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  return (
    <div>
      {showAll ? (
        <div className="flex items-center justify-between text-secondary px-4 py-3.5 mb-1.5">
          <div>
            {isDarkMode ? (
              <div className="flex items-center gap-3.5">
                <Moon size={22} /> <span className="text-sm"> Dark Theme</span>
              </div>
            ) : (
              <div className="flex items-center gap-3.5">
                <Sun size={22} /> <span className="text-sm"> Light Theme</span>
              </div>
            )}
          </div>
          <Switch action={toggleTheme} theme={isDarkMode} />
        </div>
      ) : (
        <button className="absolute top-8 right-8 w-[46px] h-[46px] bg-card border rounded-[10px] flex items-center justify-center cursor-pointer [transition:all_0.2s_ease] hover:border-myColor"
        onClick={()=> toggleTheme()}>
          {isDarkMode ? <Moon size={22} /> : <Sun size={22} />}
        </button>
      )}
    </div>
  );
};
