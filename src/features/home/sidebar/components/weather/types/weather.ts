export interface IWeatherResponse {
  id: number;
  city: string;
  temp: number;
  description: string;
  icon: string;
  humidity: number;
  wind: number;
}