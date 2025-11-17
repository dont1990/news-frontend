// Trend can be "up" or "down"
export type ITrend = "up" | "down" | "neutral";

// Supported types of live stats
export type ILiveStatType = "usd" | "gbp" | "coin" | "gold";

// The main type for a live stat card
export interface ILiveStat {
  id: number;
  title: string;
  value: string;
  change: string;
  trend: ITrend;
  type: ILiveStatType;
}
