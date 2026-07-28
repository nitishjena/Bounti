export type ActiveTab = 'pitch-deck' | 'strategy-dashboard' | 'candidate-cv' | 'ask-ai';
export type NavTab = ActiveTab;

export type StrategySubTab = 'territory-map' | 'revenue-simulator' | 'challenger-matrix' | 'target-accounts' | 'plan-roi';

export interface SlideData {
  id: number;
  chapter: string;
  title: string;
  subtitle?: string;
  speakerNotes: string;
}

export interface ScenarioModel {
  calls: number;
  callToDemoRate: number; // e.g. 8.0 (%)
  demoToDealRate: number; // e.g. 25.0 (%)
  avgDealSize: number; // e.g. 6000 (€)
  salesCycleDays: number; // e.g. 21
  sdrCount: number; // e.g. 1
  workingDays: number; // e.g. 25
}

export type SlideTheme = 'bounti-light' | 'bounti-dark' | 'berlin-neon';

export interface FunnelStageData {
  id: string;
  title?: string;
  label?: string;
  subLabel?: string;
  count?: number;
  value?: number;
  formattedValue?: string;
  unit?: string;
  percentageOfTop?: number;
  iconName?: string;
  primaryColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  badgeBg?: string;
  badgeText?: string;
  formula?: string;
  description?: string;
  benchmark?: string;
  subtext?: string;
  color?: string;
  velocityMetric?: string;
}

export interface ConversionStep {
  label?: string;
  rate?: number;
  sublabel?: string;
  benchmark?: string;
  equation?: string;
  fromId?: string;
  toId?: string;
  fromName?: string;
  toName?: string;
  conversionRate?: number;
  overallConversion?: number;
  ratioText?: string;
  calloutTitle?: string;
  description?: string;
  badgeColor?: string;
}

// Strategy Dashboard Types
export interface HotspotLocation {
  id: string;
  name: string;
  country: string;
  type: 'active' | 'vacuum' | 'whitespace';
  x: number; // % on SVG map
  y: number; // % on SVG map
  accountsCount: number;
  estTAM: string;
  recommendedPlaybook: string;
  description: string;
  keyTargetLogos: string[];
  dealVelocityDays: number;
}

export interface CompetitorComparison {
  name: string;
  category: string;
  focusArea: string;
  speedToValue: number; // 1-10
  aiAutomationScore: number; // 1-10
  onboardingFriction: 'Low' | 'Medium' | 'High';
  csatScore: number; // e.g. 4.2
  opsAndTrainingIntegration: boolean;
  notes: string;
  isBounti?: boolean;
}

export interface TargetAccount {
  id: string;
  name: string;
  industry: 'Hospitality & QSR' | 'Gym Chains' | 'Retail & Convenience' | 'Food Production';
  region: 'DACH' | 'UK' | 'Nordics' | 'Benelux';
  locationsCount: number;
  estRevenue: string;
  status: 'Trigger Fired' | 'High Priority' | 'Open Territory';
  contactTitle: string;
  triggerSignal: string;
  notes: string;
}

// Candidate CV Types
export interface SkillDimension {
  id: string;
  name: string;
  nishValue: number; // 0-100
  baselineValue: number; // 0-100
  shortCode: string;
  proofMetrics: string;
  details: string;
  keyProjects: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  achievementBadge?: string;
}

// AI Chat Types
export interface ChatMessage {
  id: string;
  sender: 'user' | 'nish';
  text: string;
  timestamp: string;
}
