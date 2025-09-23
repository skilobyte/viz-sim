import React, { useState } from "react";
import { useTheme } from "../themes/ThemeProvider";
import { VizTheme, themes } from "../themes/VizTheme";

type PinBoardProps = {
  width?: number;
  height?: number;
  title: string;
  allowLocalToggle?: boolean;
  children?: React.ReactNode;
};

const PinBoard: React.FC<PinBoardProps> = ({
  width = 800,
  height = 500,
  title,
  allowLocalToggle = true,
  children
}) => {
  const { theme: globalTheme } = useTheme();
  const [localTheme, setLocalTheme] = useState<VizTheme | null>(null);

  const effectiveTheme = localTheme || globalTheme;
  const themeConfig = themes[effectiveTheme];

  return (
    <div className="rounded-2xl shadow-lg w-fit overflow-hidden">
      {/* Header */}
      <div
        className={`flex justify-between items-center px-4 py-2 border-b 
        ${themeConfig.headerBg} ${themeConfig.headerBorder} ${themeConfig.headerText}`}
      >
        <span className="font-semibold text-sm">{title}</span>

        {allowLocalToggle && (
          <div
            className={`w-16 h-6 flex items-center rounded-full px-1 cursor-pointer transition-colors relative ${themeConfig.toggleBg}`}
            onClick={() =>
              setLocalTheme(prev =>
                prev === VizTheme.Dark
                  ? VizTheme.Light
                  : prev === VizTheme.Light
                  ? VizTheme.Dark
                  : globalTheme === VizTheme.Dark
                  ? VizTheme.Light
                  : VizTheme.Dark
              )
            }
          >
            {/* Labels */}
            <span
              className={`absolute left-2 text-[10px] transition-opacity ${
                effectiveTheme === VizTheme.Dark
                  ? "opacity-100 text-white"
                  : "opacity-0"
              }`}
            >
              Dark
            </span>
            <span
              className={`absolute right-2 text-[10px] transition-opacity ${
                effectiveTheme === VizTheme.Light
                  ? "opacity-100 text-black"
                  : "opacity-0"
              }`}
            >
              Light
            </span>

            {/* Knob */}
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                effectiveTheme === VizTheme.Dark
                  ? "translate-x-10"
                  : "translate-x-0"
              }`}
            />
          </div>
        )}
      </div>

      {/* Board */}
      <div className="relative">
        <svg
          id={`grid-${title}`}
          width={width}
          height={height}
          className={`${themeConfig.boardBg}`}
        />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PinBoard;
