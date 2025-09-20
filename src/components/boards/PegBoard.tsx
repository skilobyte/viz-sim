import React, { useState, useContext, createContext } from "react";

type Theme = "dark" | "light";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const toggle = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

type PegBoardProps = {
  width?: number;
  height?: number;
  title: string;
  allowLocalToggle?: boolean;
  children?: React.ReactNode;
};

const PegBoard: React.FC<PegBoardProps> = ({
  width = 800,
  height = 500,
  title,
  allowLocalToggle = true,
  children
}) => {
  const { theme: globalTheme } = useTheme();
  const [localTheme, setLocalTheme] = useState<Theme | null>(null);

  const effectiveTheme = localTheme || globalTheme;

  return (
    <div className="rounded-2xl shadow-lg w-fit overflow-hidden">
      {/* Header */}
      <div
        className={`flex justify-between items-center px-4 py-2 border-b ${
          effectiveTheme === "dark"
            ? "bg-[#111] border-neutral-700 text-white"
            : "bg-[#f5f5f5] border-gray-300 text-black"
        }`}
      >
        <span className="font-semibold text-sm">{title}</span>

        {allowLocalToggle && (
          <div
            className={`w-16 h-6 flex items-center rounded-full px-1 cursor-pointer transition-colors relative ${
              (localTheme || globalTheme) === "dark" ? "bg-gray-700" : "bg-gray-300"
            }`}
            onClick={() =>
              setLocalTheme(prev =>
                prev === "dark"
                  ? "light"
                  : prev === "light"
                  ? "dark"
                  : globalTheme === "dark"
                  ? "light"
                  : "dark"
              )
            }
          >
            {/* Labels */}
            <span
              className={`absolute left-2 text-[10px] transition-opacity ${
                (localTheme || globalTheme) === "dark" ? "opacity-100 text-white" : "opacity-0"
              }`}
            >
              Dark
            </span>
            <span
              className={`absolute right-2 text-[10px] transition-opacity ${
                (localTheme || globalTheme) === "light" ? "opacity-100 text-black" : "opacity-0"
              }`}
            >
              Light
            </span>

            {/* Knob */}
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                (localTheme || globalTheme) === "dark" ? "translate-x-10" : "translate-x-0"
              }`}
            />
          </div>
        )}
      </div>

      {/* Grid container */}
      <div className="relative">
        <svg
          id={`grid-${title}`}
          width={width}
          height={height}
          className={`${effectiveTheme === "dark" ? "bg-[#1a1a1a]" : "bg-white"}`}
        />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PegBoard;
