import { pixelField, fieldSize } from "@/lib/pixel-field.js";

type Props = {
  cols: number;
  rows: number;
  lit: [number, number];
  cell?: number;
  gap?: number;
  seed?: number;
  light?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * Rend la trame emblématique Altered Pixel.
 * Un seul pixel altéré (cyan) + traînée verticale.
 */
export function PixelField({
  cols,
  rows,
  lit,
  cell = 30,
  gap = 13,
  seed = 7,
  light = false,
  className,
  ariaLabel = "Trame Altered Pixel",
}: Props) {
  const { width, height } = fieldSize({ cols, rows, cell, gap });
  const markup = pixelField({ cols, rows, lit, cell, gap, seed, light });
  // Marquer le pixel altéré pour l'animation
  const litIndex = markup.indexOf(`fill="#26BEF2"/>`);
  const withPulse =
    litIndex === -1
      ? markup
      : markup.slice(0, litIndex) +
        `fill="#26BEF2" class="ap-lit"/>` +
        markup.slice(litIndex + `fill="#26BEF2"/>`.length);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      dangerouslySetInnerHTML={{ __html: withPulse }}
    />
  );
}
