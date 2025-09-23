export enum VizTheme {
    Dark = "dark",
    Light = "light",
    Solarized = "solarized" 
  }
  

  export type ThemeConfig = {
    headerBg: string;
    headerBorder: string;
    headerText: string;
    boardBg: string;
    toggleBg: string;
  };
  
  export const themes: Record<VizTheme, ThemeConfig> = {
    [VizTheme.Dark]: {
      headerBg: "bg-[#111]",
      headerBorder: "border-neutral-700",
      headerText: "text-white",
      boardBg: "bg-[#1a1a1a]",
      toggleBg: "bg-gray-700"
    },
    [VizTheme.Light]: {
      headerBg: "bg-[#f5f5f5]",
      headerBorder: "border-gray-300",
      headerText: "text-black",
      boardBg: "bg-white",
      toggleBg: "bg-gray-300"
    },
    [VizTheme.Solarized]: {
      headerBg: "bg-[#002b36]",
      headerBorder: "border-[#073642]",
      headerText: "text-[#eee8d5]",
      boardBg: "bg-[#073642]",
      toggleBg: "bg-[#586e75]"
    }
  };
  