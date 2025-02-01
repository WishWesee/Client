export const getColor = (color: string): string => {
  const colorMap: Record<string, string> = {
    color1: "#151516",
    color2: "#88898A",
    color3: "#FFA8A8",
    color4: "#FFE3A8",
    color5: "#D3FFA8",
    color6: "#A8CEFF",
    color7: "#B4A8FF",
    color8: "#F8A8FF",
  };

  return colorMap[color];
};
