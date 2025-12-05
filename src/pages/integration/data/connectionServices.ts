import type { IntegrationRow } from "../type";

import amazon from "../../../assets/integration/image 348.png";
import kafka from "../../../assets/integration/snowflake_icon.png.png";
import zapier from "../../../assets/integration/image 348 copy 2.png";

const baseConnections: IntegrationRow[] = [
  {
    icon: amazon,
    integration: "Amazon QuickSight",
    name: "Energy",
    source: "Carbon",
    entity: "ABC Group LTD - Energy",
    interval: "-",
    connectorUrl: "#",
    instructionsUrl: "#",
  },
  {
    icon: amazon,
    integration: "Amazon QuickSight",
    name: "Logistics",
    source: "Carbon",
    entity: "ABC Group LTD - Logistics",
    interval: "-",
    connectorUrl: "#",
    instructionsUrl: "#",
  },
  {
    icon: amazon,
    integration: "Amazon QuickSight",
    name: "Operations",
    source: "Carbon",
    entity: "ABC Group LTD - Operations",
    interval: "-",
    connectorUrl: "#",
    instructionsUrl: "#",
  },
  {
    icon: amazon,
    integration: "Amazon QuickSight",
    name: "Electricity ToU",
    source: "Utility",
    entity: "135 Albert St - Electricity",
    interval: "ToU",
    connectorUrl: "#",
    instructionsUrl: "#",
  },
  {
    icon: amazon,
    integration: "Amazon QuickSight",
    name: "Water",
    source: "Utility",
    entity: "135 Albert St - Water",
    interval: "Monthly",
    connectorUrl: "#",
    instructionsUrl: "#",
  },
  {
    icon: kafka,
    integration: "Kafka",
    name: "ABC Group LTD",
    source: "Carbon",
    entity: "ABC Group LTD",
    interval: "-",
    connectorUrl: "#",
    instructionsUrl: "#",
  },
  {
    icon: zapier,
    integration: "Zapier",
    name: "ABC Group LTD",
    source: "Carbon",
    entity: "ABC Group LTD",
    interval: "-",
    connectorUrl: "#",
    instructionsUrl: "#",
  },
  {
    icon: zapier,
    integration: "Zapier",
    name: "135 Albert St",
    source: "Utility",
    entity: "135 Albert St - Gas",
    interval: "Yearly",
    connectorUrl: "#",
    instructionsUrl: "#",
  },
];

export const getConnections = (): IntegrationRow[] => {
  const result: IntegrationRow[] = [];
  const target = 100;

  for (let i = 0; i < target; i++) {
    const base = baseConnections[i % baseConnections.length];
    result.push({
      ...base,
      name: `${base.name} ${i + 1}`,
    });
  }

  return result;
};
