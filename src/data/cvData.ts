import { SkillDimension, ExperienceItem } from '../types';

export const SKILL_DIMENSIONS: SkillDimension[] = [
  {
    id: 'outbound-dialing',
    name: 'Outbound Cold Dialing & High-Volume Velocity',
    nishValue: 96,
    baselineValue: 60,
    shortCode: 'DIAL',
    proofMetrics: '60–100 cold calls/day • ~40% First-Call Close Rate',
    details: 'Ran a 200+ prospect/week outbound machine at WhiteHat Jr during a $300M acquisition with zero inbound leads. Rebuilt closing methodology adopted org-wide.',
    keyProjects: ['WhiteHat Jr ($300M acquisition)', 'OneSpaWorld (200-300 closes/month)', 'TenantTrust (Cold outbound from scratch)']
  },
  {
    id: 'data-bi-tech',
    name: 'Data Science & GTM Stack Architecture',
    nishValue: 92,
    baselineValue: 45,
    shortCode: 'DATA',
    proofMetrics: 'M.Sc. Business Intelligence (ISM Munich, June 2026) • Apollo/Clay/n8n/HubSpot',
    details: 'Pairs hands-on dialing with data fluency. Builds automated enrichment (Clay + Apollo), custom lead-scoring models, CRM sequence pipelines, and SQL/Python analytics.',
    keyProjects: ['M.Sc. BI & Data Science at ISM Munich', 'TenantTrust GTM Stack Owner', 'Revenue Analytics Intern']
  },
  {
    id: 'zero-to-one-gtm',
    name: '0→1 GTM Engine & Cadence Creation',
    nishValue: 95,
    baselineValue: 50,
    shortCode: '0→1 GTM',
    proofMetrics: '1st Place ISM Startup Competition 2025 (All 7 campuses)',
    details: 'Built TenantTrust GTM from scratch: defined ICP, wrote cold outreach sequences personally, and pitched C-suite at property management firms managing 5,000+ units with no inherited playbook.',
    keyProjects: ['TenantTrust GTM Build (1st Place Award)', 'materAIze Market Entry']
  },
  {
    id: 'unscripted-selling',
    name: 'Unscripted Cross-Cultural Pitching',
    nishValue: 98,
    baselineValue: 55,
    shortCode: 'PITCH',
    proofMetrics: '80+ Countries Sold Into • Selected for Antarctic Voyage Programme',
    details: 'Ran daily live pipelines with 80+ nationalities at OneSpaWorld across cruise ship stage pitches with zero standardized inbound lead flow. Unmatched adaptability under pressure.',
    keyProjects: ['OneSpaWorld Global Operations (4 years top performance)', 'Antarctic Voyage Top-Performer Deployment']
  },
  {
    id: 'technical-narrative',
    name: 'Technical AI Product Translation',
    nishValue: 88,
    baselineValue: 50,
    shortCode: 'AI TEXT',
    proofMetrics: 'Deep-Tech AI Product Positioning for Mittelstand Procurement',
    details: 'Translated complex technical AI capabilities into clear business-value narratives for non-technical buyers at materAIze, treating every call as category education.',
    keyProjects: ['materAIze Deep-Tech AI GTM', 'Bounti AI Course Creation Positioning']
  },
  {
    id: 'deal-velocity',
    name: 'Full-Cycle Closing & Deal Velocity',
    nishValue: 90,
    baselineValue: 65,
    shortCode: 'CLOSE',
    proofMetrics: '21-Day Sales Cycle • €300K ARR / Rep Sourced Pipeline',
    details: 'Full-cycle experience owning discovery, qualification, product demos, objection handling, and contract signing directly with senior decision-makers.',
    keyProjects: ['TenantTrust C-Suite Demos', 'OneSpaWorld Monthly Acquisition Quota']
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Commercial & GTM Lead',
    company: 'TenantTrust · B2B SaaS',
    location: 'Augsburg & Munich, Germany',
    period: 'June 2025 – Present',
    highlights: [
      'Built the entire go-to-market engine from scratch with no inherited playbook, defined ICP, wrote cold sequences, and delivered product demos directly to C-suite decision-makers at property management firms managing 5,000+ units.',
      'Owned full tech stack for pipeline execution (HubSpot CRM, sequence automation, activity logging, lead routing).',
      'Translated complex SaaS capabilities into business-value narrative for non-technical buyers.'
    ],
    achievementBadge: '🏆 1st Place — ISM Startup Competition 2025 (All 7 Campuses, Awarded by Karsten Maschmeyer)'
  },
  {
    id: 'exp-2',
    role: 'Global Sales Manager — International Markets',
    company: 'WhiteHat Jr. (Edutech Startup)',
    location: 'USA (Remote)',
    period: '2020 – 2021',
    highlights: [
      'Built and ran a 200+ prospect/week outbound engine, executing 60–100 cold calls per day during a period of hypergrowth concurrent with a $300M acquisition.',
      'Achieved ~40% first-call conversion (consistently ahead of team benchmark), owning prospect research, cold outreach, discovery, demo, and close.',
      'Rebuilt structural closing methodology that was adopted company-wide, directly raising team-level conversion.'
    ],
    achievementBadge: '⚡ ~40% First-Call Close Rate (Adopted Company-Wide during $300M Acquisition)'
  },
  {
    id: 'exp-3',
    role: 'Revenue & Sales Specialist — Global Operations',
    company: 'OneSpaWorld Ltd.',
    location: 'Coral Gables, FL, USA & Global Operations',
    period: '2019 – 2023',
    highlights: [
      'Personally carried a monthly new-business acquisition quota (200–300 closed per month) with zero standardized inbound lead flow.',
      'Ran a live daily pipeline of 20–30+ prospects across 80+ nationalities, conducting live on-stage public speaking seminars and product pitches.',
      'Selected for company\'s Antarctic voyage programme — its highest-value, most operationally demanding client deployment reserved for top performers.'
    ],
    achievementBadge: '🌍 4 Years Sustained Top-Tier Quota Performance (80+ Countries Sold Into)'
  },
  {
    id: 'exp-4',
    role: 'Go-to-Market Research Analyst',
    company: 'materAIze (Deep-Tech Startup)',
    location: 'Augsburg, Germany',
    period: 'Feb 2025 – Oct 2025',
    highlights: [
      'Supported commercial strategy for early-stage AI product sold into technically sophisticated industrial buyers.',
      'Engaged pilot customers directly to surface adoption barriers and sharpen value proposition messaging.',
      'Converted highly technical product capability into commercially relevant narrative for prospective buyers.'
    ]
  }
];
