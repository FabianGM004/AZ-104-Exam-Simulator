export const questions = [
  {
    id: "q51",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to connect a virtual network to an on-premises network over an encrypted tunnel through the internet. Which Azure resource should you deploy?",
    options: [
      "VPN Gateway",
      "Azure Bastion",
      "Azure Load Balancer",
      "Private DNS zone"
    ],
    correctAnswer: 0,
    explanation: "VPN Gateway provides encrypted site-to-site connectivity over the internet.",
    references: [
      "https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways"
    ]
  },
  {
    id: "q52",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which subnet name is required when deploying an Azure VPN Gateway?",
    options: [
      "GatewaySubnet",
      "AzureBastionSubnet",
      "AzureFirewallSubnet",
      "RouteServerSubnet"
    ],
    correctAnswer: 0,
    explanation: "Azure VPN Gateway requires a dedicated subnet named GatewaySubnet.",
    references: [
      "https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpn-gateway-settings"
    ]
  },
  {
    id: "q53",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need transitive routing between spoke virtual networks through a hub network. VNet peering alone does not provide this. What should you deploy in the hub?",
    options: [
      "A network virtual appliance or Azure Firewall with user-defined routes",
      "A Private DNS zone only",
      "An Application Security Group",
      "A public IP prefix"
    ],
    correctAnswer: 0,
    explanation: "VNet peering is not transitive; hub routing requires an appliance or firewall with routes.",
    references: [
      "https://learn.microsoft.com/en-us/azure/architecture/networking/guide/network-level-segmentation"
    ]
  },
  {
    id: "q54",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need low-latency private connectivity from an on-premises datacenter to Azure through a connectivity provider. Which service should you use?",
    options: [
      "ExpressRoute",
      "Azure Bastion",
      "Azure NAT Gateway",
      "Azure Private Link"
    ],
    correctAnswer: 0,
    explanation: "ExpressRoute provides private connectivity to Azure through a connectivity provider.",
    references: [
      "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction"
    ]
  },
  {
    id: "q55",
    roadmapModule: "04-Networking",
    examObjective: "Configure and manage virtual networks",
    topic: "Virtual Networks",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which feature can reduce latency and CPU usage for supported Azure virtual machines by enabling single root I/O virtualization?",
    options: [
      "Accelerated networking",
      "Auto registration",
      "Gateway transit",
      "Service endpoints"
    ],
    correctAnswer: 0,
    explanation: "Accelerated networking uses SR-IOV to improve VM network performance.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/accelerated-networking-overview"
    ]
  },
  {
    id: "q56",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to allow outbound traffic from VMs to Azure Key Vault without manually updating IP ranges. What should you use in the NSG rule destination?",
    options: [
      "The AzureKeyVault service tag",
      "An Application Security Group",
      "A private DNS zone",
      "A load balancer probe"
    ],
    correctAnswer: 0,
    explanation: "Service tags represent Microsoft-managed IP ranges for Azure services.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/service-tags-overview"
    ]
  },
  {
    id: "q57",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which NSG default outbound rule allows VMs to initiate traffic to the internet?",
    options: [
      "AllowInternetOutBound",
      "AllowVnetOutBound",
      "DenyAllOutBound",
      "AllowAzureLoadBalancerInBound"
    ],
    correctAnswer: 0,
    explanation: "AllowInternetOutBound is a default outbound NSG rule.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"
    ]
  },
  {
    id: "q58",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Hard",
    question: "You create an inbound NSG rule with priority 200 to allow TCP 443. Another inbound rule with priority 100 denies TCP 443. What happens to HTTPS traffic?",
    options: [
      "It is denied",
      "It is allowed",
      "It is load balanced",
      "It is forwarded to DNS"
    ],
    correctAnswer: 0,
    explanation: "Lower priority numbers are evaluated first, so the deny rule is applied.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"
    ]
  },
  {
    id: "q59",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to view security rules that apply to a specific VM network interface after subnet and NIC NSGs are evaluated. What should you check?",
    options: [
      "Effective security rules",
      "Private DNS links",
      "Load balancer outbound rules",
      "Route filters"
    ],
    correctAnswer: 0,
    explanation: "Effective security rules show the NSG rules applied to a network interface.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/diagnose-network-traffic-filter-problem"
    ]
  },
  {
    id: "q60",
    roadmapModule: "04-Networking",
    examObjective: "Configure network security groups",
    topic: "NSG",
    domain: "Networking",
    difficulty: "Easy",
    question: "Which NSG rule action blocks matching network traffic?",
    options: [
      "Deny",
      "Audit",
      "Forward",
      "Resolve"
    ],
    correctAnswer: 0,
    explanation: "NSG rules can allow or deny matching traffic.",
    references: [
      "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"
    ]
  },
  {
    id: "q61",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need private DNS records to be available only inside linked virtual networks. Which DNS zone type should you use?",
    options: [
      "Private DNS zone",
      "Public DNS zone",
      "Root DNS zone",
      "Forward lookup zone in Windows Server only"
    ],
    correctAnswer: 0,
    explanation: "Azure Private DNS zones are used for private name resolution in linked VNets.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview"
    ]
  },
  {
    id: "q62",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Hard",
    question: "You link a Private DNS zone to a VNet with auto registration disabled. What must you do to resolve custom hostnames that are not automatically created?",
    options: [
      "Create DNS records manually",
      "Create an Azure Bastion host",
      "Create a public IP prefix",
      "Enable accelerated networking"
    ],
    correctAnswer: 0,
    explanation: "Without auto registration, records must be created manually or by automation.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview"
    ]
  },
  {
    id: "q63",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which record type maps a hostname to an IPv6 address in Azure DNS?",
    options: [
      "AAAA",
      "A",
      "MX",
      "PTR"
    ],
    correctAnswer: 0,
    explanation: "AAAA records map names to IPv6 addresses.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/dns-zones-records"
    ]
  },
  {
    id: "q64",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need a DNS alias from one name to another name in Azure DNS. Which record type should you create?",
    options: [
      "CNAME",
      "A",
      "MX",
      "TXT"
    ],
    correctAnswer: 0,
    explanation: "CNAME records map an alias name to another canonical name.",
    references: [
      "https://learn.microsoft.com/en-us/azure/dns/dns-zones-records"
    ]
  },
  {
    id: "q65",
    roadmapModule: "04-Networking",
    examObjective: "Configure name resolution",
    topic: "Private DNS",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to resolve Azure private endpoint names from a peered VNet. What must be true?",
    options: [
      "The peered VNet must be linked to the appropriate Private DNS zone or use DNS forwarding",
      "The peered VNet must have a public Load Balancer",
      "The peered VNet must disable all NSGs",
      "The peered VNet must use Basic public IP addresses"
    ],
    correctAnswer: 0,
    explanation: "Private endpoint name resolution requires Private DNS zone linking or forwarding.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-dns"
    ]
  },
  {
    id: "q66",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which Azure Load Balancer component defines how traffic is distributed from a frontend IP and port to a backend pool?",
    options: [
      "Load balancing rule",
      "Private DNS record",
      "Route table",
      "Application Security Group"
    ],
    correctAnswer: 0,
    explanation: "A load balancing rule maps frontend traffic to backend pool resources.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/components"
    ]
  },
  {
    id: "q67",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need to preserve the original client IP address for traffic handled by Azure Load Balancer. Which statement is correct?",
    options: [
      "Azure Load Balancer preserves the original source IP for inbound flows",
      "Azure Load Balancer always replaces the source IP with the frontend IP",
      "Azure Load Balancer requires Private DNS to preserve source IP",
      "Azure Load Balancer preserves source IP only for UDP"
    ],
    correctAnswer: 0,
    explanation: "Azure Load Balancer preserves the original source IP for inbound traffic.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview"
    ]
  },
  {
    id: "q68",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need a health probe that checks an HTTP path on backend VMs. Which probe protocol should you use?",
    options: [
      "HTTP",
      "ICMP",
      "SMTP",
      "DNS"
    ],
    correctAnswer: 0,
    explanation: "HTTP probes can check a specific HTTP path on backend instances.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-custom-probe-overview"
    ]
  },
  {
    id: "q69",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to load balance UDP traffic across backend VMs. Which Azure service is appropriate?",
    options: [
      "Azure Load Balancer",
      "Azure Application Gateway",
      "Azure DNS Private Resolver",
      "Azure Bastion"
    ],
    correctAnswer: 0,
    explanation: "Azure Load Balancer supports Layer 4 TCP and UDP load balancing.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview"
    ]
  },
  {
    id: "q70",
    roadmapModule: "04-Networking",
    examObjective: "Configure Azure Load Balancer",
    topic: "Load Balancer",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need zone-resilient load balancing across backend VMs in availability zones. Which SKU should you choose?",
    options: [
      "Standard Load Balancer",
      "Basic Load Balancer",
      "Classic Load Balancer",
      "Developer Load Balancer"
    ],
    correctAnswer: 0,
    explanation: "Standard Load Balancer supports availability zone scenarios.",
    references: [
      "https://learn.microsoft.com/en-us/azure/load-balancer/skus"
    ]
  },
  {
    id: "q71",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "You need to connect privately to an Azure SQL logical server from a VNet. Which feature should you configure?",
    options: [
      "Private Endpoint",
      "Public IP prefix",
      "Azure Bastion",
      "Inbound NAT rule"
    ],
    correctAnswer: 0,
    explanation: "Private Endpoint provides private connectivity to supported PaaS services such as Azure SQL.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview"
    ]
  },
  {
    id: "q72",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which Private DNS zone is commonly used for Azure SQL Database private endpoint resolution?",
    options: [
      "privatelink.database.windows.net",
      "privatelink.blob.core.windows.net",
      "privatelink.file.core.windows.net",
      "privatelink.queue.core.windows.net"
    ],
    correctAnswer: 0,
    explanation: "Azure SQL private endpoints commonly use privatelink.database.windows.net.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-dns"
    ]
  },
  {
    id: "q73",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "Which Private DNS zone is commonly used for Azure Files private endpoint resolution?",
    options: [
      "privatelink.file.core.windows.net",
      "privatelink.blob.core.windows.net",
      "privatelink.database.windows.net",
      "privatelink.azurewebsites.net"
    ],
    correctAnswer: 0,
    explanation: "Azure Files private endpoints commonly use privatelink.file.core.windows.net.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-dns"
    ]
  },
  {
    id: "q74",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Hard",
    question: "You need to ensure traffic to a storage account uses a private endpoint rather than the public endpoint. What should you verify?",
    options: [
      "DNS resolves the storage account name to the private endpoint IP address",
      "The VM has a public IP address",
      "The storage account uses only locally redundant storage",
      "The VNet has no subnets"
    ],
    correctAnswer: 0,
    explanation: "Correct DNS resolution is required for clients to connect to the private endpoint IP.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-dns"
    ]
  },
  {
    id: "q75",
    roadmapModule: "04-Networking",
    examObjective: "Configure private endpoints",
    topic: "Private Endpoints",
    domain: "Networking",
    difficulty: "Medium",
    question: "What happens when you create a private endpoint for a supported Azure service?",
    options: [
      "A network interface with a private IP address is created in the selected subnet",
      "A public DNS zone is deleted automatically",
      "A VPN gateway is created automatically",
      "All NSG rules are removed"
    ],
    correctAnswer: 0,
    explanation: "A private endpoint creates a network interface in your VNet with a private IP address.",
    references: [
      "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview"
    ]
  }
];
