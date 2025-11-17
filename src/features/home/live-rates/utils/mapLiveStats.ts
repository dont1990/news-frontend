import { ILiveStat } from "../types/liveStat";
import { extractPercent } from "./extractPercent";
import { getTrend } from "./getTrend";

interface IRatesData {
  tsetmc: { value: string; change?: string };
  dollar: { value: string; change?: string };
  coin: { value: string; change?: string };
  gold: { value: string; change?: string };
}


export function mapLiveStats(data: IRatesData): ILiveStat[] {
  if (!data) return [];

  const tsetmcChange = extractPercent(data.tsetmc.change);
  const dollarChange = extractPercent(data.dollar.change);
  const coinChange = extractPercent(data.coin.change);
  const goldChange = extractPercent(data.gold.change);

  return [
    {
      id: 1,
      title: "بورس",
      value: data.tsetmc.value,
      change: data.tsetmc.change || "0",
      trend: getTrend(tsetmcChange),
      type: "gbp",
    },
    {
      id: 2,
      title: "دلار",
      value: data.dollar.value,
      change: data.dollar.change || "0",
      trend: getTrend(dollarChange),
      type: "usd",
    },
    {
      id: 3,
      title: "سکه",
      value: data.coin.value,
      change: data.coin.change || "0",
      trend: getTrend(coinChange),
      type: "coin",
    },
    {
      id: 4,
      title: "طلا",
      value: data.gold.value,
      change: data.gold.change || "0",
      trend: getTrend(goldChange),
      type: "gold",
    },
  ];
}
