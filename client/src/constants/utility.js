export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function hexToRgbString(hex, alpha = 1) {
  if (!hex) return null;
  const bigint = parseInt(hex.replace('#', ''), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${[r, g, b].join(', ')}, ${alpha})`;
}