export type ProjectLink = {
  label: string;
  url: string;
  description?: string;
  variant?: "primary" | "secondary";
};

export type ProjectTechnologyGroup = {
  label: string;
  items: readonly string[];
};

export type ProjectContentItem = {
  title: string;
  description: string;
};

export type ProjectTroubleshooting = {
  title: string;
  problem?: string;
  cause?: string;
  solution?: string;
  results?: readonly string[];
  placeholder?: boolean;
};

export type ProjectOverviewItem = {
  label: string;
  value: string;
  fullWidth?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  route: `/projects/${string}`;
  name: string;
  summary: string;
  cardDescription: string;
  type: string;
  cardType?: string;
  period?: string;
  cardTechnologies: readonly string[];
  technologyGroups: readonly ProjectTechnologyGroup[];
  overviewDescription: string;
  overviewItems: readonly ProjectOverviewItem[];
  contributionDescription: string;
  contributions: readonly ProjectContentItem[];
  contributionPlaceholder?: boolean;
  stackDescription: string;
  featuresDescription: string;
  features: readonly ProjectContentItem[];
  troubleshootingDescription?: string;
  troubleshooting?: readonly ProjectTroubleshooting[];
  architectureDescription?: string;
  links?: readonly ProjectLink[];
  image?: ProjectImage;
  outcomes?: readonly string[];
};
