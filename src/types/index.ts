// Types for Cryptocurrency Data
export interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  image?: string;
  current_price?: number;
  market_cap?: number;
  market_cap_rank?: number;
  fully_diluted_valuation?: number;
  total_volume?: number;
  high_24h?: number;
  low_24h?: number;
  price_change_24h?: number;
  price_change_percentage_24h?: number;
  market_cap_change_24h?: number;
  market_cap_change_percentage_24h?: number;
  circulating_supply?: number;
  total_supply?: number;
  max_supply?: number | null;
  ath?: number;
  atl?: number;
  ath_change_percentage?: number;
  atl_change_percentage?: number;
  ath_date?: string;
  atl_date?: string;
  roi?: { times: number; currency: string; percentage: number } | null;
  last_updated?: string;
}

export interface PortfolioHolding {
  id: string;
  coinId: string;
  symbol: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  image?: string;
  addedAt: number;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  coinId: string;
  coinName: string;
  symbol: string;
  quantity: number;
  price: number;
  date: number;
  total: number;
}

export interface WatchlistItem {
  id: string;
  coinId: string;
  symbol: string;
  name: string;
  image?: string;
  addedAt: number;
}

export interface User {
  id: string;
  email: string;
  username: string;
  theme: 'light' | 'dark';
  currency: 'USD' | 'INR' | 'EUR';
  createdAt: number;
}

export interface AIInsight {
  type: 'suggestion' | 'analysis' | 'warning';
  title: string;
  description: string;
  icon?: string;
  severity?: 'low' | 'medium' | 'high';
}

export interface PortfolioStats {
  totalValue: number;
  totalInvested: number;
  totalProfit: number;
  totalProfitPercentage: number;
  profit24h: number;
  profit24hPercentage: number;
  holdings: PortfolioHolding[];
  bestPerformer: PortfolioHolding | null;
  worstPerformer: PortfolioHolding | null;
  diversificationScore: number;
  riskLevel: 'low' | 'medium' | 'high';
}
