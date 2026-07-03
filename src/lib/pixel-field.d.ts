declare module "@/lib/pixel-field.js" {
  export function pixelField(options: {
    cols: number;
    rows: number;
    lit: [number, number];
    cell?: number;
    gap?: number;
    seed?: number;
    light?: boolean;
  }): string;
  export function fieldSize(options: {
    cols: number;
    rows: number;
    cell?: number;
    gap?: number;
  }): { width: number; height: number };
}
