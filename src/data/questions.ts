export const questions = [
  {
    id: "q1",
    roadmapModule: "04-Networking",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need private connectivity between two Azure virtual networks in the same region. Which feature should you use?",
    options: [
      "Virtual network peering",
      "Azure Bastion",
      "VPN Gateway",
      "ExpressRoute"
    ],
    correctAnswer: 0,
    explanation: "VNet peering connects VNets over the Azure backbone.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview"
    ],
    roadmapLink: "https://github.com/FabianGM004/azure-infrastructure-roadmap/tree/main/04-Networking"
  },
  {
    id: "q2",
    roadmapModule: "04-Networking",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which NSG rule priority value is evaluated first?",
    options: [
      "100",
      "200",
      "65000",
      "65500"
    ],
    correctAnswer: 0,
    explanation: "Lower priority numbers are processed first.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"
    ],
    roadmapLink: "https://github.com/FabianGM004/azure-infrastructure-roadmap/tree/main/04-Networking"
  },
  {
    id: "q3",
    roadmapModule: "04-Networking",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Medium",
    question: "What is required before VMs can resolve records from an Azure Private DNS zone?",
    options: [
      "A VPN Gateway",
      "A virtual network link",
      "Azure Firewall",
      "ExpressRoute"
    ],
    correctAnswer: 1,
    explanation: "The Private DNS zone must be linked to the VNet.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/private-dns-virtual-network-links"
    ],
    roadmapLink: "https://github.com/FabianGM004/azure-infrastructure-roadmap/tree/main/04-Networking"
  },
  {
    id: "q4",
    roadmapModule: "04-Networking",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which protocol does Azure Load Balancer support?",
    options: [
      "HTTP only",
      "HTTPS only",
      "TCP and UDP",
      "SMTP only"
    ],
    correctAnswer: 2,
    explanation: "Azure Load Balancer operates at Layer 4 and supports TCP and UDP.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview"
    ],
    roadmapLink: "https://github.com/FabianGM004/azure-infrastructure-roadmap/tree/main/04-Networking"
  },
  {
    id: "q5",
    roadmapModule: "04-Networking",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "What is the primary benefit of a Private Endpoint?",
    options: [
      "Lower storage costs",
      "Private access to Azure PaaS services",
      "Automatic backups",
      "Improved VM performance"
    ],
    correctAnswer: 1,
    explanation: "Private Endpoints provide private IP connectivity to Azure services.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview"
    ],
    roadmapLink: "https://github.com/FabianGM004/azure-infrastructure-roadmap/tree/main/04-Networking"
  }
];
