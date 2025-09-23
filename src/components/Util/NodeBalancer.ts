// nodeBalancer.ts
export type VizNode = {
    id: number;
    x: number;
    y: number;
  };
  
  
  export const arrangeInRing = (
    count: number,
    width: number,
    height: number
  ): VizNode[] => {
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) / 2 - 80;
    const step = (2 * Math.PI) / count;
  
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      x: cx + radius * Math.cos(i * step - Math.PI / 2),
      y: cy + radius * Math.sin(i * step - Math.PI / 2),
    }));
  };
  