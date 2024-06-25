export interface EfficiencyChartProps {
  data: {
    timestamp: string;
    temperature: number;
    efficiency: number;
  }[];
}
