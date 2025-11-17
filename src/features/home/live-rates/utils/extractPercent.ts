export function extractPercent(change: string | undefined): number {
  if (!change) return 0;

  const match = change.match(/\(([-0-9.]+)%\)/); // extract number inside ()
  if (!match) return 0;

  return Number(match[1]); // "1.44" → 1.44
}