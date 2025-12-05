export interface CardProps {
    name: string;
    description: string;
    icon?: string;
}

export interface IntegrationRow {
  icon: string,
  integration: string;
  name: string;
  source: string;
  entity: string;
  interval: string;
  connectorUrl: string;
  instructionsUrl: string;
}