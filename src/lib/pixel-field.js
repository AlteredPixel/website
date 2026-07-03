/**
 * Altered Pixel — générateur de trame pixel (signature de marque), v1.
 * Rend la trame dans un <svg> existant ou retourne le markup.
 * Zéro dépendance. Licence : usage interne Altered Pixel.
 *
 * Exemple :
 *   svg.innerHTML = pixelField({ cols: 21, rows: 5, lit: [15, 1] });
 */
const AP = {
  cyan: "#26BEF2",
  grid: ["#10304F", "#10304F", "#0B2440"],        // fond sombre
  gridLight: ["#DCE7F3", "#DCE7F3", "#E9F1F9"],   // fond clair
};

/** Petit PRNG déterministe (mulberry32) pour des trames reproductibles. */
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * @param {object} o
 * @param {number} o.cols     colonnes
 * @param {number} o.rows     lignes
 * @param {[number, number]} o.lit  [col, ligne] du pixel altéré — jamais centré
 * @param {number} [o.cell=30]  côté d'une cellule
 * @param {number} [o.gap=13]   espace entre cellules (ratio marque 30/13)
 * @param {number} [o.seed=7]   graine (trame reproductible)
 * @param {boolean} [o.light=false]  variante fond clair
 * @returns {string} markup SVG (rects) à insérer dans un <svg>
 */
export function pixelField({ cols, rows, lit, cell = 30, gap = 13, seed = 7, light = false }) {
  const rand = rng(seed);
  const dims = light ? AP.gridLight : AP.grid;
  const out = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * (cell + gap), y = r * (cell + gap);
      if (c === lit[0] && r === lit[1]) {
        out.push(`<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${AP.cyan}"/>`);
        // traînée verticale : opacités 0.45 / 0.22 / 0.10
        [0.45, 0.22, 0.10].forEach((op, i) => {
          if (r + i + 1 < rows) {
            out.push(`<rect x="${x}" y="${y + (i + 1) * (cell + gap)}" width="${cell}" height="${cell}" fill="${AP.cyan}" opacity="${op}"/>`);
          }
        });
      } else {
        const fill = dims[Math.floor(rand() * dims.length)];
        const op = (0.35 + rand() * 0.55).toFixed(2);
        out.push(`<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${fill}" opacity="${op}"/>`);
      }
    }
  }
  return out.join("");
}

/** Dimensions utiles pour poser le viewBox. */
export function fieldSize({ cols, rows, cell = 30, gap = 13 }) {
  return { width: cols * (cell + gap) - gap, height: rows * (cell + gap) - gap };
}
