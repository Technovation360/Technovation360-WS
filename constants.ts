import { 
  MonitorSmartphone, Globe, Settings, Mail, Cloud, DatabaseBackup, ShieldCheck, PhoneCall,
  Zap, FileCheck, Map, Lightbulb, Gavel, RefreshCw, AlertTriangle, Factory, ShoppingCart, 
  Coffee, Briefcase, Server
} from 'lucide-react';

export const CONTACT_INFO = {
  founder: "Kirtan Bhuta",
  phone: "+91 7710009140",
  email: "info@technovation360.in",
  website: "www.technovation360.in",
  address: "C/702, Bldg No. 57, Om Shree Ganesh Chhaya CHS, Tilak Nagar, Chembur, Mumbai-400089"
};

export const CORE_VALUES = [
  { title: "Empowerment", desc: "Enabling businesses to reach new heights through smart technology." },
  { title: "Innovation", desc: "Continuously evolving to deliver next-generation solutions." },
  { title: "Integrity", desc: "Ensuring transparency, trust, and ethical practices in everything we do." },
  { title: "Customer Success", desc: "Measuring our success by the success of our clients." },
  { title: "Simplicity", desc: "Making complex technologies accessible, usable, and impactful." }
];

export const SOLUTIONS_DATA = [
  {
    slug: "device-management",
    title: "Device Management & Monitoring",
    subtitle: "Streamlined Control & Compliance",
    description: "TechNovation360 helps businesses maintain secure, compliant, and high-performing devices across the organization. Our solutions enable streamlined IT control, reduced downtime, and simplified compliance.",
    iconName: "MonitorSmartphone",
    features: [
      "RMM (Remote Monitoring & Management)",
      "MDM (Mobile Device Management)",
      "Proactive Monitoring Tools",
      "Automated Ticketing System",
      "Asset Lifecycle Management"
    ],
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    slug: "digital-presence",
    title: "Digital Presence",
    subtitle: "Expand Your Digital Reach",
    description: "Empowering businesses with secure, modern, and high-performing websites, applications, and communication platforms. We deliver scalable digital solutions that enhance customer experience and boost brand visibility.",
    iconName: "Globe",
    features: [
      "Business Websites & Portals",
      "Meta Business Verification for WhatsApp",
      "Custom App Development",
      "API Integrations (GST, Payment Gateways & Others)",
      "Bulk SMS & Communication Services"
    ],
    image: "https://picsum.photos/800/600?random=2",
    lottieUrl: "https://lottie.host/embed/e53951d0-ea91-47ae-9664-b03e25b7e6c4/2O2zXUTb1A.lottie"
  },
  {
    slug: "operations-automation",
    title: "Operations Automation",
    subtitle: "Intelligent Workflows for Efficiency",
    description: "Driving digital transformation through automation, system integration, and intelligent workflows. We streamline processes to boost efficiency, delivering real-time visibility and error-free operations.",
    iconName: "Settings",
    features: [
      "ERP Implementation & Support",
      "HRMS Solutions",
      "Accounting System Integration",
      "CRM Deployment",
      "Business Process Automation"
    ],
    image: "https://picsum.photos/800/600?random=3",
    lottieUrl: "https://lottie.host/embed/7e24e834-5a59-4998-8616-0300db4ceb51/6vfXPgjETC.lottie"
  },
  {
    slug: "email-collaboration",
    title: "Email & Collaboration",
    subtitle: "Seamless Team Connectivity",
    description: "Strengthen business security and productivity with robust email and collaboration tools. We ensure your team stays connected securely, whether in the office or remote.",
    iconName: "Mail",
    features: [
      "Enterprise Email Solutions (Google Workspace / Microsoft 365)",
      "Team Collaboration Platforms",
      "Secure File Sharing",
      "Video Conferencing Solutions",
      "Email Archiving & Compliance"
    ],
    image: "https://picsum.photos/800/600?random=4"
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    subtitle: "Scalable & Reliable Infrastructure",
    description: "Build reliable and scalable cloud foundations that strengthen security, performance, and resilience. We help businesses modernize their infrastructure with ease.",
    iconName: "Cloud",
    features: [
      "Cloud Server Hosting (AWS, Azure, GCP)",
      "Cloud Backup Strategies",
      "Disaster Recovery as a Service (DRaaS)",
      "Application Hosting",
      "Container as a Service (CaaS)"
    ],
    image: "https://picsum.photos/800/600?random=5",
    lottieUrl: "https://lottie.host/embed/cf95c277-c9da-43af-bb89-1c22d273de62/u6ihjEh6NU.lottie"
  },
  {
    slug: "backup-recovery",
    title: "Backup & Recovery Solutions",
    subtitle: "Protect Your Critical Assets",
    description: "Providing advanced, multi-layered data protection strategies. We ensure safe operations, preserve trust, and secure critical assets against data loss and corruption.",
    iconName: "DatabaseBackup",
    features: [
      "End-User Device Backup",
      "Server Backup & Snapshotting",
      "Cloud Application Backup (SaaS Backup)",
      "Ransomware Protection",
      "Rapid Restoration Capabilities"
    ],
    image: "https://picsum.photos/800/600?random=6",
    lottieUrl: "https://lottie.host/embed/e0f6e056-464b-413d-9b20-ebc21a46c731/AExVMY2Uc1.lottie"
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Solutions",
    subtitle: "Multi-layered Defense",
    description: "Strengthening business security by providing multi-layered protection against threats, vulnerabilities, and cyber risks. We help organizations operate safely and protect their most valuable assets.",
    iconName: "ShieldCheck",
    features: [
      "Endpoint Security (EDR/XDR)",
      "Network Security & Next-Gen Firewalls",
      "Email Security & Anti-Spam",
      "Vulnerability Assessments",
      "Zero Trust Architecture"
    ],
    image: "https://picsum.photos/800/600?random=7",
    lottieUrl: "https://lottie.host/embed/9aea59d2-f8c9-4baa-8e0f-d910c42e9a14/X605yXHUJ4.lottie"
  },
  {
    slug: "voice-solutions",
    title: "Voice Solutions",
    subtitle: "Next-Gen Communication",
    description: "Internet-based calling solutions that make business communication easier, cheaper, and more secure. Moving beyond traditional phone cables for better quality and features.",
    iconName: "PhoneCall",
    features: [
      "Virtual Numbers & Toll-Free Numbers",
      "Cloud PBX",
      "IVR & Auto-Attendant",
      "Call Recording & Analytics",
      "Soft-phones & Voice Integration"
    ],
    image: "https://picsum.photos/800/600?random=8",
    lottieUrl: "https://lottie.host/embed/2ee76458-40e9-4759-a36b-1c4bb1e333b7/RMvnODlGpP.lottie"
  }
];

export const SERVICES_DATA = [
  {
    slug: "operation-digitalization",
    title: "Operation Digitalization",
    description: "A comprehensive approach combining Operation Digitalization, Digital Transformation, and Innovation. We analyze current processes to identify improvement areas, implement digital solutions to simplify workflows, and drive innovation through future-ready technologies.",
    iconName: "Zap",
    features: [
      "Process Analysis & Automation Strategy",
      "Digital Workflow Implementation",
      "Legacy System Modernization",
      "Innovation Workshops & Tech Adoption",
      "Operational Efficiency Enhancement"
    ]
  },
  {
    slug: "technology-grc",
    title: "Technology Governance, Risk and Compliance",
    description: "Aligning technology investments with business goals through Technology Strategy & Roadmapping, IT Governance, Risk & Compliance, and Cybersecurity & Threat Mitigation. We provide robust frameworks to manage risks proactively.",
    iconName: "ShieldCheck",
    features: [
      "Technology Strategy & Roadmapping",
      "IT Governance & Risk Management",
      "Regulatory Compliance & Audit Prep",
      "Cybersecurity & Threat Mitigation",
      "Security Architecture Design"
    ]
  },
  {
    slug: "bcdr",
    title: "Business Continuity & Disaster Recovery",
    description: "Building resilient continuity strategies that guarantee seamless operations and rapid data restoration during outages.",
    iconName: "RefreshCw",
    features: ["BCP Planning", "Disaster Recovery Drills", "Resilience Architecture"]
  }
];

export const INDUSTRIES = [
  { name: "Manufacturing", iconName: "Factory" },
  { name: "Retail & Distribution", iconName: "ShoppingCart" },
  { name: "FMCG", iconName: "Coffee" },
  { name: "Financial Services", iconName: "Briefcase" },
  { name: "IT & MSPs", iconName: "Server" }
];

export const WHY_CHOOSE_US_POINTS = [
  "A one-stop IT solution covering cloud, security, operations, collaboration, and digital presence.",
  "Solutions tailored through detailed process and requirement analysis.",
  "Multi-layered security integrated across all technology operations.",
  "A proactive approach to analyzing challenges and strengthening future readiness.",
  "A commitment to delivering solutions that align with business goals, efficiency, and growth."
];

export const BLOG_POSTS = [
  {
    id: "1",
    slug: "5-signs-digital-transformation",
    title: "5 Signs Your Business Needs Digital Transformation",
    excerpt: "Struggling with manual processes and disconnected systems? Here are the key indicators that it's time to modernize your operations.",
    content: `
      <p>In today's fast-paced business environment, staying competitive means more than just having a website. It requires a fundamental shift in how you operate, deliver value to customers, and leverage technology. But how do you know when it's time to take the leap into digital transformation?</p>
      
      <h3>1. Your Data is Siloed</h3>
      <p>If your sales team can't see what customer support is doing, or your inventory system doesn't talk to your accounting software, you have data silos. Digital transformation integrates these systems, providing a single source of truth.</p>
      
      <h3>2. Manual Processes are Slowing You Down</h3>
      <p>Are your employees spending hours on data entry or shuffling paper? Automation is a key component of digital transformation, freeing up your team to focus on high-value strategic work.</p>
      
      <h3>3. Customer Experience is Suffering</h3>
      <p>Modern customers expect seamless, personalized experiences. If your technology limits your ability to respond quickly or understand customer needs, you risk losing them to competitors.</p>
      
      <h3>4. Compliance is a Headache</h3>
      <p>With regulations like GDPR and local data protection laws, managing compliance manually is risky. Modern IT governance frameworks built into digital solutions can automate compliance checks.</p>
      
      <h3>5. You Lack Real-Time Insights</h3>
      <p>If you have to wait until the end of the month to know how your business performed, you're driving blind. Digital dashboards provide real-time analytics for better decision-making.</p>
      
      <p><strong>Conclusion</strong></p>
      <p>Digital transformation isn't just about technology; it's about business survival and growth. At TechNovation360, we guide you through every step of this journey.</p>
    `,
    date: "October 24, 2023",
    author: "Kirtan Bhuta",
    category: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Strategy", "Automation", "Growth"]
  },
  {
    id: "2",
    slug: "cloud-security-best-practices-2025",
    title: "Cloud Security Best Practices for 2025",
    excerpt: "As cyber threats evolve, so must your defense strategies. Discover the essential security measures to protect your cloud infrastructure.",
    content: `
      <p>Moving to the cloud offers immense scalability and flexibility, but it also introduces new security challenges. As we approach 2025, the threat landscape is becoming more sophisticated.</p>
      
      <h3>Zero Trust Architecture</h3>
      <p>The old model of "trust but verify" is dead. Zero Trust assumes that no user or device is trustworthy by default, regardless of their location relative to the corporate network perimeter.</p>
      
      <h3>Multi-Factor Authentication (MFA) Everywhere</h3>
      <p>Passwords are no longer enough. Enforcing MFA across all endpoints and cloud applications is the single most effective way to prevent unauthorized access.</p>
      
      <h3>Regular Vulnerability Assessments</h3>
      <p>You can't fix what you don't know is broken. Regular scanning and penetration testing help identify weak points in your infrastructure before attackers do.</p>
      
      <p>At TechNovation360, we implement multi-layered security protocols to ensure your data remains safe while you enjoy the benefits of the cloud.</p>
    `,
    date: "November 12, 2023",
    author: "Tech Team",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    tags: ["Security", "Cloud", "Zero Trust"]
  },
  {
    id: "3",
    slug: "benefits-of-managed-it-services",
    title: "Why Managed IT Services are Essential for SMEs",
    excerpt: "Reduce downtime and predict costs better by partnering with a Managed Service Provider. Learn how MSPs drive efficiency.",
    content: `
      <p>Small and Medium Enterprises (SMEs) often struggle to maintain a full in-house IT department. This is where Managed IT Services (MSPs) come in, bridging the gap between cost and expertise.</p>
      
      <h3>Proactive Maintenance</h3>
      <p>Instead of the "break-fix" model, MSPs monitor your systems 24/7 to catch issues before they cause downtime.</p>
      
      <h3>Cost Predictability</h3>
      <p>With a fixed monthly fee, you avoid the shock of unexpected IT repair bills.</p>
      
      <h3>Access to Expertise</h3>
      <p>You get access to a team of experts across various domains—security, cloud, networking—for the price of one hire.</p>
    `,
    date: "December 05, 2023",
    author: "Kirtan Bhuta",
    category: "Managed Services",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["MSP", "Cost Saving", "Efficiency"]
  }
];

export const ICON_MAP: Record<string, any> = {
  MonitorSmartphone, Globe, Settings, Mail, Cloud, DatabaseBackup, ShieldCheck, PhoneCall,
  Zap, FileCheck, Map, Lightbulb, Gavel, RefreshCw, AlertTriangle, Factory, ShoppingCart, 
  Coffee, Briefcase, Server
};