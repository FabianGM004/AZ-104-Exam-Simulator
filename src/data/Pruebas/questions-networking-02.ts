export const questions = [
  {
    id: "q26",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to override Azure system routes for traffic from a subnet to a virtual appliance. What should you associate with the subnet?",
    options: [
      "A route table with a user-defined route",
      "A Private DNS zone",
      "An Application Security Group",
      "A public IP prefix"
    ],
    correctAnswer: 0,
    explanation: "User-defined routes in a route table can direct subnet traffic to a virtual appliance.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview"
    ]
  },
  {
    id: "q27",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which next hop type should you use in a route table to send traffic to a network virtual appliance?",
    options: [
      "Virtual appliance",
      "Internet",
      "VNet peering",
      "None"
    ],
    correctAnswer: 0,
    explanation: "The virtual appliance next hop sends traffic to a specified appliance IP address.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview"
    ]
  },
  {
    id: "q28",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Hard",
    question: "You add a route with address prefix 10.1.0.0/16 and another route with 10.1.2.0/24. Traffic is sent to 10.1.2.5. Which route is selected?",
    options: [
      "The 10.1.2.0/24 route",
      "The 10.1.0.0/16 route",
      "The route with the newest creation time",
      "The system default route"
    ],
    correctAnswer: 0,
    explanation: "Azure selects the route with the longest prefix match.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview"
    ]
  },
  {
    id: "q29",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which Azure feature lets you securely connect to a VM through the Azure portal without exposing RDP or SSH directly to the internet?",
    options: [
      "Azure Bastion",
      "Azure NAT Gateway",
      "Azure Load Balancer",
      "Azure Private DNS"
    ],
    correctAnswer: 0,
    explanation: "Azure Bastion provides browser-based RDP and SSH access without public VM exposure.",
    references: [
      "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview"
    ]
  },
  {
    id: "q30",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to allow a VM to forward traffic that is not addressed to itself. What must be enabled on the VM network interface?",
    options: [
      "IP forwarding",
      "Accelerated networking",
      "Auto registration",
      "Service endpoints"
    ],
    correctAnswer: 0,
    explanation: "IP forwarding allows a NIC to forward traffic intended for other destinations.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface"
    ]
  },
  {
    id: "q31",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Easy",
    question: "Where can you associate a Network Security Group?",
    options: [
      "A subnet or a network interface",
      "A management group only",
      "A storage container only",
      "A DNS record set only"
    ],
    correctAnswer: 0,
    explanation: "NSGs can be associated with subnets and network interfaces.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"
    ]
  },
  {
    id: "q32",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which default NSG rule allows communication between resources in the same virtual network?",
    options: [
      "AllowVnetInBound",
      "DenyAllInBound",
      "AllowInternetOutBound",
      "DenyAllOutBound"
    ],
    correctAnswer: 0,
    explanation: "AllowVnetInBound permits inbound traffic from the VirtualNetwork service tag.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"
    ]
  },
  {
    id: "q33",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to allow inbound management traffic only from Azure Bastion. Which source service tag should you use in the NSG rule?",
    options: [
      "AzureBastion",
      "Internet",
      "Storage",
      "Sql"
    ],
    correctAnswer: 0,
    explanation: "The AzureBastion service tag represents Azure Bastion service traffic.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/service-tags-overview"
    ]
  },
  {
    id: "q34",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Medium",
    question: "What is the valid priority range for custom NSG security rules?",
    options: [
      "100 to 4096",
      "1 to 99",
      "4097 to 65535",
      "0 to 100"
    ],
    correctAnswer: 0,
    explanation: "Custom NSG rules use priorities from 100 through 4096.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"
    ]
  },
  {
    id: "q35",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need to create one NSG rule that includes multiple source ports and multiple destination ports. Which rule capability supports this?",
    options: [
      "Augmented security rules",
      "DNS forwarding rules",
      "Load balancing rules",
      "Inbound NAT rules"
    ],
    correctAnswer: 0,
    explanation: "Augmented security rules can include multiple ports and IP ranges in one rule.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"
    ]
  },
  {
    id: "q36",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need two VNets to resolve records from the same Private DNS zone. What should you configure?",
    options: [
      "Link both VNets to the Private DNS zone",
      "Create two public DNS zones",
      "Create one NAT gateway per VNet",
      "Enable IP forwarding on all NICs"
    ],
    correctAnswer: 0,
    explanation: "Multiple virtual networks can be linked to the same Private DNS zone for resolution.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/private-dns-virtual-network-links"
    ]
  },
  {
    id: "q37",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which Azure DNS Private Resolver component receives DNS queries from on-premises networks?",
    options: [
      "Inbound endpoint",
      "Outbound endpoint",
      "Load balancing rule",
      "Application Security Group"
    ],
    correctAnswer: 0,
    explanation: "Inbound endpoints allow DNS queries from other networks to Azure DNS Private Resolver.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/dns-private-resolver-overview"
    ]
  },
  {
    id: "q38",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which Azure DNS Private Resolver component is used with forwarding rulesets to send queries to external DNS servers?",
    options: [
      "Outbound endpoint",
      "Inbound endpoint",
      "Health probe",
      "Private endpoint"
    ],
    correctAnswer: 0,
    explanation: "Outbound endpoints forward DNS queries based on DNS forwarding rulesets.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/dns-private-resolver-overview"
    ]
  },
  {
    id: "q39",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need conditional forwarding for selected DNS zones from Azure to on-premises DNS servers. What should you configure?",
    options: [
      "A DNS forwarding ruleset with an outbound endpoint",
      "A public DNS delegation",
      "A Load Balancer health probe",
      "An NSG flow log"
    ],
    correctAnswer: 0,
    explanation: "Forwarding rulesets and outbound endpoints provide conditional DNS forwarding.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/private-resolver-endpoints-rulesets"
    ]
  },
  {
    id: "q40",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Easy",
    question: "Which record type maps a hostname to an IPv4 address in an Azure Private DNS zone?",
    options: [
      "A",
      "MX",
      "TXT",
      "CAA"
    ],
    correctAnswer: 0,
    explanation: "An A record maps a name to an IPv4 address.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/dns-zones-records"
    ]
  },
  {
    id: "q41",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which Load Balancer component defines the IP address that receives incoming traffic?",
    options: [
      "Frontend IP configuration",
      "Backend pool",
      "Health probe",
      "NAT gateway"
    ],
    correctAnswer: 0,
    explanation: "The frontend IP configuration is the address clients connect to.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/components"
    ]
  },
  {
    id: "q42",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which Load Balancer component contains the VMs or NICs that receive distributed traffic?",
    options: [
      "Backend pool",
      "Frontend IP configuration",
      "Private DNS zone",
      "Route table"
    ],
    correctAnswer: 0,
    explanation: "Backend pools contain the resources that receive load-balanced traffic.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/components"
    ]
  },
  {
    id: "q43",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to forward a unique frontend port to a specific VM in the backend pool for management access. What should you configure?",
    options: [
      "Inbound NAT rule",
      "Health probe",
      "Private DNS link",
      "Service endpoint"
    ],
    correctAnswer: 0,
    explanation: "Inbound NAT rules forward traffic from a frontend port to a specific backend instance.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/inbound-nat-rules"
    ]
  },
  {
    id: "q44",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need a Standard Load Balancer rule that load balances all TCP and UDP ports for network virtual appliances. What should you configure?",
    options: [
      "HA ports",
      "A DNS forwarding ruleset",
      "A private endpoint",
      "A service tag"
    ],
    correctAnswer: 0,
    explanation: "HA ports load balance all ports for TCP and UDP flows on internal Standard Load Balancer.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-ha-ports-overview"
    ]
  },
  {
    id: "q45",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which Load Balancer SKU is recommended for production workloads and supports availability zones?",
    options: [
      "Standard",
      "Basic",
      "Developer",
      "Free"
    ],
    correctAnswer: 0,
    explanation: "Standard Load Balancer is recommended for production and supports zone scenarios.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/skus"
    ]
  },
  {
    id: "q46",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which feature lets you connect privately to Azure PaaS services while keeping traffic on the Microsoft backbone?",
    options: [
      "Azure Private Link",
      "Azure Traffic Manager",
      "Azure DNS public zone",
      "Public IP prefix"
    ],
    correctAnswer: 0,
    explanation: "Azure Private Link enables private connectivity to supported services over the Microsoft backbone.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-link-overview"
    ]
  },
  {
    id: "q47",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which subnet setting can affect network policies for private endpoints?",
    options: [
      "Private endpoint network policies",
      "Auto registration",
      "Gateway transit",
      "HTTP health probes"
    ],
    correctAnswer: 0,
    explanation: "Private endpoint network policies are controlled at the subnet level.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/disable-private-endpoint-network-policy"
    ]
  },
  {
    id: "q48",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "You create a private endpoint for a storage account blob service. Which Private DNS zone is commonly used for blob private endpoint resolution?",
    options: [
      "privatelink.blob.core.windows.net",
      "privatelink.database.windows.net",
      "privatelink.vaultcore.azure.net",
      "privatelink.azurewebsites.net"
    ],
    correctAnswer: 0,
    explanation: "Blob storage private endpoints use the privatelink.blob.core.windows.net DNS zone.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-dns"
    ]
  },
  {
    id: "q49",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need private connectivity to a supported Azure service, and the service must appear as a network interface in your VNet. What should you deploy?",
    options: [
      "A private endpoint",
      "A service tag",
      "A public endpoint",
      "A DNS forwarding ruleset"
    ],
    correctAnswer: 0,
    explanation: "A private endpoint is represented by a network interface with a private IP in the VNet.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview"
    ]
  },
  {
    id: "q50",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "What is the main difference between a service endpoint and a private endpoint?",
    options: [
      "A private endpoint uses a private IP in your VNet, while a service endpoint extends VNet identity to the service",
      "A service endpoint always requires a private IP address in your VNet",
      "A private endpoint is only for virtual machines",
      "A service endpoint disables all public access automatically"
    ],
    correctAnswer: 0,
    explanation: "Private Endpoints use private IPs; service endpoints extend VNet identity to Azure services.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-link-faq"
    ]
  }
];
