export const questions = [
  {
    id: "q1",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Easy",
    question: "You need two Azure virtual networks to communicate using private IP addresses over the Microsoft backbone. What should you configure?",
    options: [
      "Virtual network peering",
      "Azure Bastion",
      "NAT Gateway",
      "Public IP prefix"
    ],
    correctAnswer: 0,
    explanation: "Virtual network peering connects VNets privately through the Azure backbone.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview"
    ]
  },
  {
    id: "q2",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "You peer VNet1 with VNet2. Resources in VNet1 must use a VPN gateway in VNet2. What should you enable?",
    options: [
      "Gateway transit on VNet2 and remote gateway use on VNet1",
      "Auto registration on both VNets",
      "A public IP address on each subnet",
      "Forced tunneling on the NICs"
    ],
    correctAnswer: 0,
    explanation: "Gateway transit allows a peered VNet to use another VNet gateway when configured correctly.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview"
    ]
  },
  {
    id: "q3",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need outbound internet connectivity from private subnets using a predictable public IP address. What should you associate with the subnets?",
    options: [
      "Azure NAT Gateway",
      "Azure Bastion",
      "Azure Private DNS zone",
      "Application Security Group"
    ],
    correctAnswer: 0,
    explanation: "NAT Gateway provides scalable outbound connectivity with predictable public IP addresses.",
    references: [
      "https://learn.microsoft.com/en-us/azure/nat-gateway/nat-overview"
    ]
  },
  {
    id: "q4",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need to divide a VNet address space into isolated network segments for different application tiers. What should you create?",
    options: [
      "Subnets",
      "Private DNS zones",
      "Route filters",
      "Public IP prefixes"
    ],
    correctAnswer: 0,
    explanation: "Subnets divide a virtual network address space into smaller network segments.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet"
    ]
  },
  {
    id: "q5",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to host Azure Bastion in a virtual network. Which subnet name is required?",
    options: [
      "AzureBastionSubnet",
      "GatewaySubnet",
      "AzureFirewallSubnet",
      "BastionGatewaySubnet"
    ],
    correctAnswer: 0,
    explanation: "Azure Bastion requires a dedicated subnet named AzureBastionSubnet.",
    references: [
      "https://learn.microsoft.com/en-us/azure/bastion/configuration-settings"
    ]
  },
  {
    id: "q6",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Easy",
    question: "How are NSG rules processed when multiple rules could match the same traffic?",
    options: [
      "Lowest priority number first",
      "Highest priority number first",
      "Newest rule first",
      "Alphabetical order by rule name"
    ],
    correctAnswer: 0,
    explanation: "NSG rules are processed by priority, with lower numbers evaluated first.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"
    ]
  },
  {
    id: "q7",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Medium",
    question: "A subnet NSG allows inbound HTTPS, but the NIC NSG denies inbound HTTPS. What is the result?",
    options: [
      "Traffic is allowed because subnet NSG rules override NIC NSG rules",
      "Traffic is denied because both NSGs must allow the traffic",
      "Traffic is allowed because HTTPS is allowed by default",
      "Traffic bypasses the NIC NSG"
    ],
    correctAnswer: 1,
    explanation: "When NSGs exist at subnet and NIC level, traffic must be allowed by both.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-group-how-it-works"
    ]
  },
  {
    id: "q8",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Medium",
    question: "You want an NSG rule to target a group of VMs by application role instead of IP addresses. What should you use?",
    options: [
      "Application Security Groups",
      "Private DNS zones",
      "Route tables",
      "Public IP prefixes"
    ],
    correctAnswer: 0,
    explanation: "Application Security Groups allow logical grouping of VM NICs for NSG rules.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups"
    ]
  },
  {
    id: "q9",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which NSG feature should you use to allow traffic from Azure Storage without maintaining a list of IP ranges manually?",
    options: [
      "Service tags",
      "Application Security Groups",
      "Private endpoints",
      "Load balancing rules"
    ],
    correctAnswer: 0,
    explanation: "Service tags represent groups of Azure service IP prefixes managed by Microsoft.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/service-tags-overview"
    ]
  },
  {
    id: "q10",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need to review whether traffic from a VM to another endpoint is allowed or denied by NSG rules. Which Network Watcher capability should you use?",
    options: [
      "IP flow verify",
      "Connection monitor",
      "Packet capture",
      "Topology"
    ],
    correctAnswer: 0,
    explanation: "IP flow verify checks whether traffic is allowed or denied by NSG rules.",
    references: [
      "https://learn.microsoft.com/en-us/azure/network-watcher/ip-flow-verify-overview"
    ]
  },
  {
    id: "q11",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Easy",
    question: "What must you create to use Azure-provided private name resolution for custom DNS records inside a virtual network?",
    options: [
      "Azure Private DNS zone",
      "Azure Load Balancer",
      "Azure Bastion host",
      "Public IP prefix"
    ],
    correctAnswer: 0,
    explanation: "Azure Private DNS zones provide name resolution for private DNS records.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview"
    ]
  },
  {
    id: "q12",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Medium",
    question: "You create a Private DNS zone. What must you configure so VMs in a VNet can resolve records in that zone?",
    options: [
      "A virtual network link",
      "A NAT gateway",
      "A public DNS delegation",
      "A route table"
    ],
    correctAnswer: 0,
    explanation: "A Private DNS zone must be linked to a VNet for resolution from that VNet.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/private-dns-virtual-network-links"
    ]
  },
  {
    id: "q13",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Medium",
    question: "You enable auto registration on a Private DNS virtual network link. What happens when a VM is created in the linked VNet?",
    options: [
      "An A record is automatically created in the Private DNS zone",
      "A public DNS zone is created automatically",
      "An NSG rule is created automatically",
      "A private endpoint is created automatically"
    ],
    correctAnswer: 0,
    explanation: "Auto registration automatically creates DNS records for VMs in the linked VNet.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/private-dns-autoregistration"
    ]
  },
  {
    id: "q14",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Hard",
    question: "How many Private DNS zones can have auto registration enabled for the same virtual network?",
    options: [
      "One",
      "Two",
      "Five",
      "Unlimited"
    ],
    correctAnswer: 0,
    explanation: "A virtual network can be linked to only one Private DNS zone with auto registration enabled.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/private-dns-autoregistration"
    ]
  },
  {
    id: "q15",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need DNS resolution from an on-premises network to Azure Private DNS zones. Which service can provide inbound DNS resolution endpoints?",
    options: [
      "Azure DNS Private Resolver",
      "Azure Load Balancer",
      "Azure NAT Gateway",
      "Azure Bastion"
    ],
    correctAnswer: 0,
    explanation: "Azure DNS Private Resolver supports inbound and outbound endpoints for hybrid DNS resolution.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/dns-private-resolver-overview"
    ]
  },
  {
    id: "q16",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Easy",
    question: "At which OSI layer does Azure Load Balancer operate?",
    options: [
      "Layer 4",
      "Layer 7",
      "Layer 2",
      "Layer 1"
    ],
    correctAnswer: 0,
    explanation: "Azure Load Balancer is a Layer 4 load balancer for TCP and UDP traffic.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview"
    ]
  },
  {
    id: "q17",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Medium",
    question: "What does Azure Load Balancer use to determine whether a backend VM should receive traffic?",
    options: [
      "Health probe",
      "Private DNS zone",
      "Application Security Group",
      "Route filter"
    ],
    correctAnswer: 0,
    explanation: "Health probes check backend availability before traffic is distributed.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-custom-probe-overview"
    ]
  },
  {
    id: "q18",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to load balance traffic from the internet to VMs in Azure. Which Load Balancer type should you create?",
    options: [
      "Public Load Balancer",
      "Internal Load Balancer",
      "Gateway Load Balancer only",
      "Private DNS Load Balancer"
    ],
    correctAnswer: 0,
    explanation: "A public Load Balancer distributes internet traffic to backend resources.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/components"
    ]
  },
  {
    id: "q19",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to load balance traffic only inside a virtual network. Which Load Balancer type should you use?",
    options: [
      "Internal Load Balancer",
      "Public Load Balancer",
      "Azure Traffic Manager",
      "Azure Front Door"
    ],
    correctAnswer: 0,
    explanation: "An internal Load Balancer uses a private frontend IP address.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/components"
    ]
  },
  {
    id: "q20",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need outbound connectivity for backend VMs through Azure Load Balancer. Which component should you configure?",
    options: [
      "Outbound rule",
      "Private DNS record",
      "Application Security Group",
      "Inbound NAT rule only"
    ],
    correctAnswer: 0,
    explanation: "Outbound rules define outbound SNAT behavior for Standard Load Balancer.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/outbound-rules"
    ]
  },
  {
    id: "q21",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Easy",
    question: "What does an Azure Private Endpoint use inside your virtual network?",
    options: [
      "A private IP address",
      "A public IP address",
      "A DNS root server",
      "A VPN tunnel only"
    ],
    correctAnswer: 0,
    explanation: "A Private Endpoint uses a private IP address from the selected subnet.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview"
    ]
  },
  {
    id: "q22",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "After creating a Private Endpoint for a storage account, clients still resolve the public IP address. What should you configure?",
    options: [
      "Private DNS zone integration",
      "A public Load Balancer",
      "A NAT Gateway",
      "A larger subnet"
    ],
    correctAnswer: 0,
    explanation: "Private DNS allows the service name to resolve to the private endpoint IP address.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-dns"
    ]
  },
  {
    id: "q23",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which Azure feature allows private access to supported Azure PaaS services over a private IP address?",
    options: [
      "Azure Private Link",
      "Azure Traffic Manager",
      "Azure Bastion",
      "Azure Monitor"
    ],
    correctAnswer: 0,
    explanation: "Azure Private Link provides private connectivity to supported Azure services.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-link-overview"
    ]
  },
  {
    id: "q24",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need to restrict access to an Azure Storage account so clients connect through a private IP address in a VNet. What should you create?",
    options: [
      "A private endpoint",
      "A public endpoint",
      "A public DNS zone",
      "A public IP prefix"
    ],
    correctAnswer: 0,
    explanation: "A private endpoint enables private network access to the storage account.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/tutorial-private-endpoint-storage-portal"
    ]
  },
  {
    id: "q25",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which DNS record type is commonly used in Private DNS zones to map a private endpoint name to its private IP address?",
    options: [
      "A",
      "MX",
      "TXT",
      "SRV"
    ],
    correctAnswer: 0,
    explanation: "Private endpoint DNS resolution commonly uses A records for private IP mapping.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-dns"
    ]
  }
];
