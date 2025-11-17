export function getTrend(value: number) {
  if (value > 0) return "up";
  if (value < 0) return "down";
  return "neutral"; 
}
