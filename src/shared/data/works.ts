export const workStats: { id: number; title: string; value: string }[] = [
  { id: 1, title: 'Projects Completed', value: '50+' },
  { id: 2, title: 'Happy Clients', value: '25+' },
  { id: 3, title: 'Team Members', value: '10' },
  {
    id: 4,
    title: 'Years Experience',
    value: `${new Date().getFullYear() - 2024}+`,
  },
]

export type ProjectType = 'Business System' | 'E-commerce' | 'Website'

export const PROJECT_TYPES: ProjectType[] = [
  'Business System',
  'E-commerce',
  'Website',
]

export interface Testimonial {
  id: number
  // Links the quote to a case study page (optional for non-portfolio clients)
  projectId?: string
  name: string
  role: string
  text: string
  rating: number
}

export interface CaseStudyFeature {
  icon: string // lucide-react icon name
  title: string
  description: string
}

export interface CaseStudyMetric {
  value: string
  label: string
  description: string
}

export interface Project {
  id: string // also used as the URL slug: /works/[id]
  title: string
  category: string
  type: ProjectType
  industry: string
  client: string
  platform: string
  description: string
  // Optional: a branded placeholder is shown until a thumbnail is uploaded.
  // Cover image, also used for Open Graph and small thumbnails.
  image?: string
  // Optional extra screenshots. Shown after `image` in the project card's
  // auto-sliding carousel, so there's no need to merge them into one image.
  images?: string[]
  tags: string[]
  link?: string
  background: {
    overview: string
    challenges: string[]
  }
  objectives: string[]
  solution: {
    approach: string
    features: CaseStudyFeature[]
  }
  results: {
    // NOTE: review these figures with the client before publishing.
    metrics: CaseStudyMetric[]
    outcomes: string[]
  }
}

export const PROJECTS: Project[] = [
  {
    id: 'megagrosirhemat-erp',
    title: 'Mega Grosir Hemat ERP',
    category: 'Enterprise Resource Planning',
    type: 'Business System',
    industry: 'Grocery Wholesale & Marketplace Retail',
    client: 'Mega Grosir Hemat',
    platform: 'Multi-tenant Web ERP',
    description:
      'Mega Grosir Hemat sells sembako (basic groceries) through Shopee shops and direct B2B invoices. A multi-tenant ERP that aggregates marketplace sales, costs inventory on strict FIFO, and keeps double-entry books automatically.',
    tags: [
      'ERP',
      'Marketplace Order Aggregation',
      'FIFO Inventory Costing',
      'Double-entry Accounting',
      'Financial Reports',
      'Purchasing',
      'Role-based Access',
    ],
    background: {
      overview:
        'Mega Grosir Hemat runs several marketplace shops alongside direct B2B sales. Every day the team downloaded order, income and wallet reports from each shop, then reconciled them by hand against purchases, stock and the books. As volume grew, the numbers drifted apart and closing a month took far too long.',
      challenges: [
        'Daily marketplace exports from multiple shops had to be merged and reconciled manually in spreadsheets.',
        'Cost of goods sold was estimated, because nobody could trace each unit sold back to the purchase it came from.',
        'Marketplace fees, payouts and wallet movements were hard to match against individual orders.',
        'Journals, receivables and payables were recorded separately, so financial statements were slow and error-prone.',
        'Backdated purchases or corrections broke stock and cost figures that had already been reported.',
      ],
    },
    objectives: [
      'Turn raw marketplace exports into clean orders, revenues and balance transactions automatically.',
      'Cost every unit sold on strict FIFO, per product and per warehouse, even for backdated documents.',
      'Post double-entry journals automatically for every business event.',
      'Produce trial balance, ledger, balance sheet, income statement and cash flow on demand.',
      'Support multiple companies and channels with fine-grained, role-based access.',
    ],
    solution: {
      approach:
        'We built a multi-tenant ERP on a NestJS and Next.js stack backed by PostgreSQL, MongoDB, Redis and S3-compatible storage. Staff upload the daily marketplace reports; background jobs normalise them, run every movement through a FIFO inventory engine, and post balanced journals to a configurable chart of accounts. Period closing locks the books, and real-time notifications keep everyone informed while long jobs run.',
      features: [
        {
          icon: 'FileSpreadsheet',
          title: 'Marketplace Import Pipeline',
          description:
            'Orders, income and transaction reports are imported asynchronously and normalised into orders, fees, payouts and wallet movements.',
        },
        {
          icon: 'Layers',
          title: 'FIFO Inventory Engine',
          description:
            'Every unit sold is costed from the purchase layer it came from, with safe recalculation when documents are backdated.',
        },
        {
          icon: 'BookOpenCheck',
          title: 'Automatic Double-entry Accounting',
          description:
            'Shipments, settlements, purchases, receipts, invoices, adjustments and depreciation post journals to a configurable chart of accounts.',
        },
        {
          icon: 'ChartPie',
          title: 'Financial Statements',
          description:
            'Trial balance, general ledger, balance sheet, income statement and cash flow, with period closing and locks.',
        },
        {
          icon: 'ShoppingBag',
          title: 'Procure-to-stock',
          description:
            'Purchase invoices with down payments, and delivery orders that receive goods into a warehouse.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Policy-based Access',
          description:
            'Users, roles, responsibilities and policies control which menus and actions each person can use, per company.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: 'Auto',
          label: 'Journal Posting',
          description: 'Every business event posts balanced journals.',
        },
        {
          value: 'FIFO',
          label: 'Unit-level Costing',
          description: 'Accurate COGS per product and warehouse.',
        },
        {
          value: '5',
          label: 'Financial Statements',
          description: 'Generated on demand from live data.',
        },
      ],
      outcomes: [
        'Marketplace reconciliation moved from spreadsheets to an automated pipeline.',
        'Accurate cost of goods sold and gross margin per order and product.',
        'Faster, more reliable month-end closing with locked periods.',
        'One platform for finance, purchasing, sales and master data across companies.',
      ],
    },
  },
  {
    id: 'megagrosirhemat-wms',
    title: 'Mega Grosir Hemat WMS',
    category: 'Warehouse Management System',
    type: 'Business System',
    industry: 'Grocery Wholesale & Marketplace Retail',
    client: 'Mega Grosir Hemat',
    platform: 'Web-based WMS (shares the ERP backend)',
    description:
      'The warehouse side of the Mega Grosir Hemat platform. A WMS for stock positions, physical and virtual warehouses, sales fulfilment, shipping-label printing and end-of-day dispatch, sharing one backend and one login with the ERP.',
    tags: [
      'Warehouse Management',
      'Stock Position & Movements',
      'Sales Fulfilment',
      'Shipping Label Printing',
      'End-of-day Dispatch',
      'Real-time Notifications',
    ],
    background: {
      overview:
        "Hundreds of marketplace orders leave the Mega Grosir Hemat warehouses every day. Before the WMS, the team could not see whether there was enough stock for today's orders until they started picking, and shipping labels, dispatch recaps and stock corrections were all tracked by hand.",
      challenges: [
        'No reliable view of stock on hand per warehouse while orders were waiting to be processed.',
        "Picking started without knowing whether today's orders could actually be fulfilled.",
        'Shipping labels were printed and checked manually, so orders were missed or printed twice.',
        'Stock adjustments and transfers were not traceable, which made audits difficult.',
      ],
    },
    objectives: [
      'Show live stock positions and every movement per physical and virtual warehouse.',
      'Check product requirements against stock before fulfilment starts.',
      'Make shipping-label printing and dispatch trackable end to end.',
      'Keep warehouse data and accounting in sync automatically.',
    ],
    solution: {
      approach:
        'We built the WMS as a second application area on the same platform as the ERP: one login, one set of roles, one source of truth. Every stock movement goes through the same FIFO inventory engine, so warehouse actions feed the books directly. Readiness checks, label printing sessions and an end-of-day dispatch flow guide the team through the daily routine.',
      features: [
        {
          icon: 'Warehouse',
          title: 'Physical & Virtual Warehouses',
          description:
            'Model real buildings and logical stock pools, with live stock position per product and warehouse.',
        },
        {
          icon: 'ArrowLeftRight',
          title: 'Stock Movements & Adjustments',
          description:
            'Every inbound, outbound and adjustment is logged and costed by the shared inventory engine.',
        },
        {
          icon: 'ClipboardCheck',
          title: 'Upload Checker & Readiness',
          description:
            "Compares what pending orders need against stock on hand, and only unlocks once every shop has uploaded today's orders.",
        },
        {
          icon: 'Printer',
          title: 'Shipping Label Printing',
          description:
            'Print sessions track which labels were printed and which are still pending, so nothing ships twice or not at all.',
        },
        {
          icon: 'Truck',
          title: 'End-of-day Dispatch',
          description:
            "Recap and confirm the day's handovers to couriers, with fulfilled orders recorded automatically.",
        },
        {
          icon: 'BellRing',
          title: 'Real-time Notifications',
          description:
            'Socket-based updates when imports, recalculations and other background jobs finish.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: 'Live',
          label: 'Stock Position',
          description: 'Per product, per warehouse.',
        },
        {
          value: '1',
          label: 'Shared Platform',
          description: 'Same login and data as the ERP.',
        },
        {
          value: '100%',
          label: 'Traceable Movements',
          description: 'Every stock change is logged and costed.',
        },
      ],
      outcomes: [
        "The team knows before picking whether today's orders can be fulfilled.",
        'Fewer missed or duplicate shipments thanks to tracked label printing.',
        'Auditable stock history for every adjustment and transfer.',
        'Warehouse activity flows straight into accounting, with no double entry.',
      ],
    },
  },
  {
    id: 'megagrosirhemat-storefront',
    title: 'Mega Grosir Hemat Storefront',
    category: 'Storefront',
    type: 'E-commerce',
    industry: 'Grocery Wholesale & Retail',
    client: 'Mega Grosir Hemat',
    platform: 'Online Storefront',
    description:
      "The direct online storefront for Mega Grosir Hemat: complete, affordable wholesale sembako such as cooking oil, sugar, flour and rice for Indonesian families, alongside the brand's marketplace shops. Currently in its pre-launch phase.",
    tags: [
      'Storefront',
      'Product Catalogue',
      'Online Wholesale Ordering',
      'SEO Optimization',
      'Branding',
    ],
    link: 'https://megagrosir.com',
    background: {
      overview:
        'Mega Grosir Hemat sold almost entirely through third-party marketplaces, paying platform fees on every order and competing side by side with other sellers. The business wanted its own channel where families and resellers could find the full sembako range at wholesale prices and order directly.',
      challenges: [
        'Heavy reliance on marketplaces and their fees.',
        'No branded place to showcase the full product range.',
        'Repeat and wholesale customers had no direct way to order.',
        'Product data needed to stay consistent with the catalogue already managed in the ERP.',
      ],
    },
    objectives: [
      'Launch a branded storefront as a direct sales channel.',
      'Present the full sembako catalogue clearly on any device.',
      'Rank for searches such as "grosir sembako" and "belanja grosir online".',
      "Build on the same product data as the company's ERP and WMS.",
    ],
    solution: {
      approach:
        "We are building a fast, mobile-first storefront on Next.js that puts Mega Grosir Hemat's staples front and centre. Customers browse by category, find products quickly and order directly, while the business gains a channel it fully owns. A coming-soon page with search metadata is already live to build awareness ahead of launch.",
      features: [
        {
          icon: 'Store',
          title: 'Branded Storefront',
          description:
            'A clean, recognisable shopping experience built around the Mega Grosir Hemat brand.',
        },
        {
          icon: 'LayoutGrid',
          title: 'Sembako Catalogue',
          description:
            'Cooking oil, sugar, flour, rice and other kitchen staples, organised by category with clear wholesale prices.',
        },
        {
          icon: 'ShoppingCart',
          title: 'Direct Ordering',
          description:
            'A simple cart and checkout flow so customers can order without going through a marketplace.',
        },
        {
          icon: 'Search',
          title: 'SEO from Day One',
          description:
            'Metadata and keywords targeting wholesale grocery searches, live before the full launch.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: 'Direct',
          label: 'Sales Channel',
          description: 'Orders without marketplace fees.',
        },
        {
          value: '24/7',
          label: 'Online Ordering',
          description: 'Customers can shop any time after launch.',
        },
        {
          value: 'Pre-launch',
          label: 'Status',
          description: 'Coming-soon page live at megagrosir.com.',
        },
      ],
      outcomes: [
        'A channel the business owns, alongside its marketplace shops.',
        'Stronger brand presence for Mega Grosir Hemat.',
        'An easier way for families and resellers to reorder staples.',
        'Designed to share product data with the ERP and WMS.',
      ],
    },
  },
  {
    id: 'setigiheni-vmrs',
    title: 'Setigi Heni',
    category: 'Voucher Management & Redemption System',
    type: 'Business System',
    industry: 'Food & Beverage',
    client: 'Setigi Heni & Cinta Food',
    platform: 'Web Dashboard + Local Printer Agent',
    description:
      'A Voucher Management & Redemption System for Setigi Heni and Cinta Food. Issue voucher batches with unique codes, print barcode stickers, and check and redeem vouchers at any outlet, all from one central database.',
    tags: [
      'Voucher Management',
      'Barcode Sticker Printing',
      'Multi-tenant',
      'Queue-based Code Generation',
      'Redemption Tracking',
      'Admin Panel',
    ],
    background: {
      overview:
        'Setigi Heni and Cinta Food run promotions with physical vouchers across several outlets, overseen by a head office. Vouchers were hard to track: there was no reliable way to know which codes had been printed, whether a voucher was still valid, or whether it had already been used at another outlet.',
      challenges: [
        'Vouchers could be reused or forged because codes were not verified centrally.',
        "A voucher issued by one brand could not be checked at another brand's outlet.",
        'No record of when stickers were printed or by whom.',
        'Head office had no consolidated view of issued and redeemed vouchers.',
      ],
    },
    objectives: [
      'Generate unique, verifiable voucher codes in large batches.',
      'Print barcode stickers directly from the dashboard.',
      'Validate and redeem vouchers instantly at any outlet.',
      'Give each tenant its own scope while head office sees everything.',
    ],
    solution: {
      approach:
        'We built a centralised VMRS with a NestJS API, a Next.js dashboard and a small local printer agent. Creating a batch queues a background job that generates unique 14-digit codes. Staff print barcode stickers straight from the browser, and every outlet checks and redeems codes against the same database, so a voucher issued at Cinta Food can be redeemed at Setigi Heni immediately.',
      features: [
        {
          icon: 'TicketPercent',
          title: 'Categories, Benefits & Batches',
          description:
            'Define voucher categories and benefits, then issue batches with validity periods.',
        },
        {
          icon: 'Binary',
          title: 'Queue-based Code Generation',
          description:
            'BullMQ jobs generate thousands of unique 14-digit codes in the background without slowing the dashboard.',
        },
        {
          icon: 'Printer',
          title: 'Barcode Sticker Printing',
          description:
            'A paired local printer agent prints and calibrates stickers, and every print run is logged.',
        },
        {
          icon: 'ScanBarcode',
          title: 'Check & Redeem',
          description:
            'Scan or type a code to see its benefit and validity, then redeem it in one step.',
        },
        {
          icon: 'History',
          title: 'Full Voucher History',
          description:
            'See when each code was printed, which category and benefit it carries, and where it was redeemed.',
        },
        {
          icon: 'Building2',
          title: 'Multi-tenant Access',
          description:
            'Each brand sees its own batches and redemptions; head office sees everything.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: '14-digit',
          label: 'Unique Codes',
          description: 'Generated and verified centrally.',
        },
        {
          value: 'Instant',
          label: 'Cross-outlet Redemption',
          description: 'One database for every brand and outlet.',
        },
        {
          value: '100%',
          label: 'Print Runs Logged',
          description: 'Every sticker print is traceable.',
        },
      ],
      outcomes: [
        'Voucher reuse and forgery prevented by central validation.',
        'Customers can redeem vouchers at any participating outlet.',
        'Full traceability from batch creation to printing and redemption.',
        'Head office gets a consolidated view of every promotion.',
      ],
    },
  },
  {
    id: 'aristee',
    title: 'Klinik Kecantikan Aristée',
    category: 'Landing Page',
    type: 'Website',
    industry: 'Beauty & Aesthetic Clinic',
    client: 'Klinik Kecantikan Aristée by dr. Linda',
    platform: 'Landing Page & Treatment Catalogue',
    description:
      'A doctor-supervised beauty clinic in Pringsewu, Lampung. A landing page with a full treatment catalogue, local SEO and WhatsApp booking, delivered together with the WhatsApp Business setup and catalogue upload.',
    // TODO: sample images to preview the slider, replace with Aristée screenshots
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/medilink.webp',
    images: [
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/cmgestun.webp',
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/pureroutepeps.webp',
    ],
    tags: [
      'Landing Page',
      'Treatment Catalogue',
      'Local SEO',
      'WhatsApp Business Setup',
      'QR Code Menu',
    ],
    background: {
      overview:
        'Aristée was preparing its soft opening in Pringsewu and needed to be found and trusted from day one. Prospective patients had no place to learn about the clinic, its doctor, or its treatments, and bookings depended on word of mouth.',
      challenges: [
        'A new clinic with no online presence ahead of its opening.',
        'Treatments and their benefits were hard to explain over chat.',
        'Low visibility in local searches such as "klinik kecantikan Pringsewu".',
        'No structured way to receive and manage booking inquiries.',
      ],
    },
    objectives: [
      'Build trust with a professional, on-brand landing page.',
      'Present every treatment with clear details and visuals.',
      'Rank in local searches around Pringsewu and Lampung.',
      'Turn visitors into WhatsApp bookings.',
    ],
    solution: {
      approach:
        'We built a fast, elegant landing page that introduces the clinic, its doctor-supervised approach and BPOM-registered products, plus a dedicated page for each of its 18 treatments. Structured data, a sitemap and a social preview image support local SEO, and every page leads to WhatsApp. We also set up WhatsApp Business, uploaded the catalogue, and created a QR code menu for the clinic.',
      features: [
        {
          icon: 'Sparkles',
          title: 'Elegant Brand Experience',
          description:
            "A refined visual style with botanical details that reflects the clinic's identity.",
        },
        {
          icon: 'BookHeart',
          title: 'Treatment Catalogue',
          description:
            '18 treatment pages, each covering benefits, the process and visuals.',
        },
        {
          icon: 'MapPin',
          title: 'Local SEO',
          description:
            'Structured data, a sitemap, Open Graph images and Google Maps integration for local discovery.',
        },
        {
          icon: 'MessageCircle',
          title: 'WhatsApp Booking',
          description:
            'A floating WhatsApp button, plus WhatsApp Business setup with the full catalogue uploaded.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: '18',
          label: 'Treatment Pages',
          description: 'Each with its own SEO-friendly URL.',
        },
        {
          value: '1-tap',
          label: 'WhatsApp Booking',
          description: 'From any page, on any device.',
        },
        {
          value: 'Day 1',
          label: 'Online Presence',
          description: 'Live in time for the soft opening.',
        },
      ],
      outcomes: [
        "A credible online presence ready for the clinic's opening.",
        'Patients understand treatments before they book.',
        'Better discoverability in local searches.',
        'A smoother booking flow through WhatsApp Business.',
      ],
    },
  },
  {
    id: 'medilink',
    title: 'MediLink',
    category: 'Healthcare Supply Chain Management System',
    type: 'Business System',
    industry: 'Healthcare & Medical Supply',
    client: 'MediLink',
    platform: 'Web Application (SaaS)',
    description:
      'MediLink is a system that allows the business to manage their medical equipment and supplies with a modern design, responsive layout, admin panel, and inventory tracking system.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/medilink.webp',
    tags: [
      'SaaS',
      'Inventory Management',
      'In-app Notification System',
      'B2B2C Schema Support',
      'Admin Panel',
    ],
    link: 'https://medilink.vanologiasolutio.my.id',
    background: {
      overview:
        'Medical equipment distributors juggle suppliers, hospitals, clinics and end customers at the same time. Stock data lived in spreadsheets and chat threads, so nobody had a single, trusted view of what was available, what was ordered and what was about to run out.',
      challenges: [
        'Stock levels were tracked manually across several spreadsheets, causing mismatches and stock-outs.',
        'Orders from distributors, clinics and individual buyers followed different flows with no unified record.',
        'Critical updates (low stock, order status, expiring items) were communicated by phone or chat and often missed.',
        'The business needed one platform that could serve multiple tenants without duplicating data.',
      ],
    },
    objectives: [
      'Centralise medical inventory into one real-time source of truth.',
      'Support B2B and B2C order flows on a single multi-tenant platform.',
      'Notify the right people automatically when action is needed.',
      'Give admins full control over products, users and transactions.',
    ],
    solution: {
      approach:
        'We designed MediLink as a multi-tenant SaaS with a B2B2C data model, so distributors, healthcare facilities and end customers each get the right view of the same data. Inventory, orders and notifications are connected, so every stock movement is reflected instantly across the platform.',
      features: [
        {
          icon: 'Boxes',
          title: 'Real-time Inventory',
          description:
            'Track stock per item, batch and location with automatic updates on every inbound and outbound movement.',
        },
        {
          icon: 'Network',
          title: 'B2B2C Schema',
          description:
            'One data model that serves suppliers, facilities and individual buyers with role-based access.',
        },
        {
          icon: 'BellRing',
          title: 'In-app Notifications',
          description:
            'Instant alerts for low stock, new orders and status changes, so teams react before problems grow.',
        },
        {
          icon: 'LayoutDashboard',
          title: 'Admin Panel',
          description:
            'Manage products, tenants, users and transactions from one responsive dashboard.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: '1',
          label: 'Single Source of Truth',
          description: 'All inventory and orders in one platform.',
        },
        {
          value: 'Real-time',
          label: 'Stock Visibility',
          description: 'Every movement reflected instantly.',
        },
        {
          value: '3',
          label: 'User Segments Served',
          description: 'Suppliers, facilities and end customers.',
        },
      ],
      outcomes: [
        'Spreadsheet-based stock tracking replaced by an automated system.',
        'Fewer stock-outs thanks to proactive low-stock notifications.',
        'Faster order processing with a unified order flow for every customer type.',
        'A scalable SaaS foundation ready to onboard new tenants.',
      ],
    },
  },
  {
    id: 'cmgestun',
    title: 'CM Gestun',
    category: 'Company Profile Web Page',
    type: 'Website',
    industry: 'Financial Services',
    client: 'CM Gestun, Palembang',
    platform: 'Company Profile Website',
    description:
      'CM Gestun is a trusted credit card cash-advance (gesek tunai) and credit card payoff service in Palembang. A company profile website that builds trust, explains its services, and turns visitors into WhatsApp inquiries.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/cmgestun.webp',
    tags: ['Company Profile', 'Branding', 'SEO Optimization'],
    link: 'https://cmgestun.com/',
    background: {
      overview:
        'CM Gestun helps customers in Palembang withdraw cash from their credit card limit and pay off credit card balances. In a market where trust is everything, the business relied on word of mouth and social media, with no official website to prove its credibility or be found on search engines.',
      challenges: [
        'In financial services, customers hesitate to transact with a business that has no official online presence.',
        'Low visibility on Google for high-intent searches such as "gesek tunai Palembang".',
        'Customers kept asking the same questions about fees and accepted cards over chat.',
        'Inquiries were scattered across channels and hard to convert.',
      ],
    },
    objectives: [
      'Establish a professional, trustworthy online presence.',
      'Rank for local, high-intent search keywords.',
      'Answer common questions on fees and payment methods upfront.',
      'Make it effortless for visitors to start a transaction via WhatsApp.',
    ],
    solution: {
      approach:
        'We built a fast, responsive company profile website that explains each service clearly, shows every accepted card and paylater provider, and lets visitors estimate costs before they reach out. Every page is optimised for local SEO and leads straight to WhatsApp.',
      features: [
        {
          icon: 'ShieldCheck',
          title: 'Trust-first Branding',
          description:
            'A clean, consistent identity with clear service information and reasons to choose CM Gestun.',
        },
        {
          icon: 'Calculator',
          title: 'Cost Simulation',
          description:
            'A calculator that lets customers estimate fees before contacting the team.',
        },
        {
          icon: 'CreditCard',
          title: 'Payment Methods Showcase',
          description:
            'Visa, Mastercard, JCB, Amex and paylater providers presented at a glance.',
        },
        {
          icon: 'MessageCircle',
          title: 'WhatsApp Conversion',
          description:
            'Direct WhatsApp entry points on every page that turn visitors into inquiries.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: '24/7',
          label: 'Always-on Presence',
          description: 'Customers can learn and inquire any time.',
        },
        {
          value: '100%',
          label: 'Mobile Responsive',
          description: 'Optimised for every screen size.',
        },
        {
          value: 'Local SEO',
          label: 'Ready from Day One',
          description: 'Built to be found by customers in Palembang.',
        },
      ],
      outcomes: [
        'A professional website that strengthens credibility with new customers.',
        'Fewer repetitive questions thanks to the cost simulator and payment info.',
        'Better organic reach through local search optimisation.',
        'More direct inquiries through clear WhatsApp contact paths.',
      ],
    },
  },
  {
    id: 'pureroutepeptides',
    title: 'Pure Route Peptides',
    category: 'E-commerce',
    type: 'E-commerce',
    industry: 'Health & Research Products',
    client: 'Pure Route Peptides (USA)',
    platform: 'Custom E-commerce Website',
    description:
      'Pure Route Peptides is a business that sells peptides in the USA. Custom built website with a modern design, responsive layout, admin panel, and mailing system.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/pureroutepeps.webp',
    tags: [
      'E-commerce',
      'Mailing System',
      'Voucher & Coupon System',
      'Admin Panel',
    ],
    link: 'https://pureroutepeps.com',
    background: {
      overview:
        'Pure Route Peptides wanted to sell directly to customers across the USA with full control over its brand, pricing and promotions. Off-the-shelf store builders were limiting and did not fit its product catalogue or marketing needs.',
      challenges: [
        'Template-based platforms limited branding and checkout customisation.',
        'No built-in way to run targeted promotions and discount campaigns.',
        'Order confirmations and customer communication were handled manually.',
        'The team needed an easy way to manage products and orders without developer help.',
      ],
    },
    objectives: [
      'Launch a custom, brand-aligned online store.',
      'Enable flexible promotions with vouchers and coupons.',
      'Automate transactional and marketing emails.',
      'Give the team a simple admin panel to run the store.',
    ],
    solution: {
      approach:
        'We built a custom e-commerce website tailored to the product catalogue, with a streamlined shopping experience, a flexible promotion engine and automated email communication. A dedicated admin panel lets the team manage everything on their own.',
      features: [
        {
          icon: 'ShoppingCart',
          title: 'Custom Storefront',
          description:
            'A modern, responsive catalogue and checkout designed around the brand.',
        },
        {
          icon: 'TicketPercent',
          title: 'Voucher & Coupon Engine',
          description:
            'Create percentage, fixed-amount and limited-use codes to drive campaigns.',
        },
        {
          icon: 'Mail',
          title: 'Mailing System',
          description:
            'Automatic order confirmations, status updates and promotional emails.',
        },
        {
          icon: 'LayoutDashboard',
          title: 'Admin Panel',
          description:
            'Manage products, stock, orders, customers and promotions in one place.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: '24/7',
          label: 'Online Sales',
          description: 'Customers can order any time across the USA.',
        },
        {
          value: '100%',
          label: 'Automated Emails',
          description: 'Order emails sent without manual work.',
        },
        {
          value: 'Self-serve',
          label: 'Store Management',
          description: 'No developer needed for daily operations.',
        },
      ],
      outcomes: [
        'Full ownership of branding, pricing and the checkout experience.',
        'Marketing campaigns launched in minutes with vouchers and coupons.',
        'Less manual customer communication thanks to automated emails.',
        'An admin team that runs the store independently.',
      ],
    },
  },
  {
    id: 'neomeridian',
    title: 'Neo Meridian Therapy',
    category: 'Point of Sale System',
    type: 'Business System',
    industry: 'Health & Wellness',
    client: 'Neo Meridian Therapy',
    platform: 'Web-based POS & Reservation System',
    description:
      'A system that allows the business to manage their sales and inventory with a seamless integration to thermal printer to print receipts.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/neomeridian.webp',
    tags: [
      'Point of Sale',
      'Reservation System',
      'Thermal Printer',
      'Reporting System',
      'Admin Panel',
    ],
    background: {
      overview:
        'Neo Meridian Therapy handled bookings, payments and receipts by hand. As the number of customers grew, double bookings, handwritten receipts and end-of-day recaps started to slow the team down.',
      challenges: [
        'Reservations recorded manually, leading to schedule clashes.',
        'Handwritten receipts that looked unprofessional and were easy to lose.',
        'Daily sales recaps took a long time and were prone to errors.',
        'No clear view of which services and therapists performed best.',
      ],
    },
    objectives: [
      'Digitise reservations and prevent double bookings.',
      'Speed up checkout with printed receipts.',
      'Automate daily and periodic sales reports.',
      'Track inventory used for treatments.',
    ],
    solution: {
      approach:
        'We delivered an integrated POS and reservation system that connects bookings, sales and inventory. It talks directly to a thermal printer, so every transaction produces a professional receipt instantly, and every sale feeds automated reports.',
      features: [
        {
          icon: 'CalendarCheck',
          title: 'Reservation System',
          description:
            'Book sessions by time slot and therapist with automatic clash prevention.',
        },
        {
          icon: 'CreditCard',
          title: 'Point of Sale',
          description:
            'Fast checkout for services and products with multiple payment methods.',
        },
        {
          icon: 'Printer',
          title: 'Thermal Printer Integration',
          description:
            'Print receipts directly from the browser right after payment.',
        },
        {
          icon: 'ChartColumn',
          title: 'Reporting System',
          description:
            'Daily, weekly and monthly reports on revenue, services and stock.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: '0',
          label: 'Double Bookings',
          description: 'Slots are locked as soon as they are reserved.',
        },
        {
          value: 'Instant',
          label: 'Printed Receipts',
          description: 'Generated right after every transaction.',
        },
        {
          value: 'Auto',
          label: 'Sales Reports',
          description: 'No more manual end-of-day recaps.',
        },
      ],
      outcomes: [
        'A smoother front-desk experience for both staff and customers.',
        'Professional, consistent receipts for every transaction.',
        'Accurate reports that support better business decisions.',
        'Clear visibility of stock used for treatments.',
      ],
    },
  },
  {
    id: 'hematindonesia',
    title: 'Hemat Indonesia',
    category: 'Package Tracking System',
    type: 'Business System',
    industry: 'E-commerce Logistics',
    client: 'Hemat Indonesia',
    platform: 'Web-based Tracking System',
    description:
      'Hemat Indonesia is a online store focusing on daily goods. Package tracking system including webcam and barcode scanner integration for package inspection.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/hematindonesia.webp',
    tags: [
      'Package Tracker',
      'Webcam & Barcode Scanner',
      'Cloud Infrastructure',
      'Admin Panel',
    ],
    background: {
      overview:
        'Hemat Indonesia ships a high volume of daily-goods orders. When customers reported missing or wrong items, the team had no reliable proof of what was packed, which made disputes slow and costly to resolve.',
      challenges: [
        'No visual evidence of package contents at the time of packing.',
        'Customer complaints about missing or wrong items were hard to verify.',
        'Manual logging of packages was slow and error-prone.',
        'Recordings needed to be stored safely and found quickly.',
      ],
    },
    objectives: [
      'Record visual proof for every package packed.',
      'Speed up packing with barcode-based identification.',
      'Resolve customer disputes quickly with searchable evidence.',
      'Store recordings securely in the cloud.',
    ],
    solution: {
      approach:
        'We built a package tracking system that pairs a barcode scanner with a webcam. Scanning a resi number starts a recording of the packing process, links it to the order, and uploads it to the cloud, so any package can be looked up in seconds.',
      features: [
        {
          icon: 'ScanBarcode',
          title: 'Barcode Scanner',
          description:
            'Scan the shipping label to identify the order and start the inspection instantly.',
        },
        {
          icon: 'Webcam',
          title: 'Webcam Recording',
          description:
            'Capture the packing process as video evidence tied to each package.',
        },
        {
          icon: 'Cloud',
          title: 'Cloud Infrastructure',
          description:
            'Recordings are stored securely and remain accessible from anywhere.',
        },
        {
          icon: 'SearchCheck',
          title: 'Searchable Admin Panel',
          description:
            'Find any package by tracking number and replay its recording in seconds.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: '100%',
          label: 'Packages Recorded',
          description: 'Every package has visual proof.',
        },
        {
          value: 'Seconds',
          label: 'To Find Evidence',
          description: 'Search by tracking number and replay.',
        },
        {
          value: 'Cloud',
          label: 'Secure Storage',
          description: 'Accessible anywhere, anytime.',
        },
      ],
      outcomes: [
        'Customer disputes resolved faster with clear video proof.',
        'Fewer packing mistakes thanks to barcode-driven workflows.',
        'Greater customer trust in order accuracy.',
        'A scalable process that keeps up with growing order volume.',
      ],
    },
  },
  {
    id: 'sinaroganindustri',
    title: 'Sinar Ogan Industri',
    category: 'E-commerce',
    type: 'E-commerce',
    industry: 'Medical Disposable Supplies',
    client: 'Sinar Ogan Industri',
    platform: 'E-commerce Website',
    description:
      'Sinar Ogan Industri is a business that sells disposable medical supplies. Website with Midtrans integration for payment gateway, and admin panel for managing the business.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/sinaroganindustri.webp',
    tags: [
      'E-commerce',
      'Payment Gateway',
      'Recommendation System',
      'Admin Panel',
    ],
    background: {
      overview:
        'Sinar Ogan Industri sold disposable medical supplies mostly through direct contact. Payments were confirmed manually via bank transfer, which slowed down order processing and limited how many customers the team could serve.',
      challenges: [
        'Manual payment confirmation delayed order fulfilment.',
        'No online catalogue for customers to browse and order independently.',
        'Limited ability to cross-sell related products.',
        'Orders and stock were managed without a central system.',
      ],
    },
    objectives: [
      'Launch an online store for disposable medical supplies.',
      'Automate payments through a trusted payment gateway.',
      'Increase basket size with product recommendations.',
      'Manage products and orders from one admin panel.',
    ],
    solution: {
      approach:
        'We built an e-commerce website integrated with Midtrans, so customers can pay with their preferred method and orders are confirmed automatically. A recommendation system suggests relevant products, and an admin panel ties catalogue, orders and payments together.',
      features: [
        {
          icon: 'Store',
          title: 'Online Catalogue',
          description:
            'Browse and order medical supplies with clear product information.',
        },
        {
          icon: 'Wallet',
          title: 'Midtrans Payment Gateway',
          description:
            'Bank transfer, e-wallet and card payments with automatic confirmation.',
        },
        {
          icon: 'Sparkles',
          title: 'Recommendation System',
          description:
            'Suggest related and frequently bought-together products.',
        },
        {
          icon: 'LayoutDashboard',
          title: 'Admin Panel',
          description:
            'Manage products, stock, orders and payment status in one place.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: 'Auto',
          label: 'Payment Confirmation',
          description: 'No more manual transfer checks.',
        },
        {
          value: 'Multi',
          label: 'Payment Methods',
          description: 'Transfer, e-wallet and cards via Midtrans.',
        },
        {
          value: '24/7',
          label: 'Online Ordering',
          description: 'Customers can order at any time.',
        },
      ],
      outcomes: [
        'Faster order fulfilment with automatic payment verification.',
        'A wider customer reach through a self-service online store.',
        'More cross-selling opportunities via product recommendations.',
        'Centralised order and stock management.',
      ],
    },
  },
  {
    id: 'centralmedica',
    title: 'Central Medica Lampung',
    category: 'ERP System',
    type: 'Business System',
    industry: 'Medical Equipment Distribution',
    client: 'Central Medica Lampung',
    platform: 'Web-based ERP System',
    description:
      'Central Medica Lampung is a business that sells medical equipment and supplies. ERP system for the business.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/centralmedicalampung.webp',
    tags: ['Inventory Management', 'Reporting System', 'Admin Panel'],
    background: {
      overview:
        'Central Medica Lampung manages a large catalogue of medical equipment and supplies. Purchasing, inventory and sales were recorded in separate places, so preparing reports and reconciling stock took a lot of manual effort.',
      challenges: [
        'Data spread across separate spreadsheets and paper records.',
        'Stock reconciliation took hours and was often inaccurate.',
        'Management reports had to be compiled manually.',
        'Limited control over who could access and change data.',
      ],
    },
    objectives: [
      'Integrate inventory, purchasing and sales into one system.',
      'Keep stock data accurate and up to date.',
      'Generate management reports automatically.',
      'Introduce role-based access for staff.',
    ],
    solution: {
      approach:
        'We built a tailored ERP system that connects the core operations of the business. Every purchase and sale updates inventory automatically, and reports are generated on demand, giving management a clear, real-time view of the company.',
      features: [
        {
          icon: 'Warehouse',
          title: 'Inventory Management',
          description:
            'Track stock in, stock out and current levels across the catalogue.',
        },
        {
          icon: 'Receipt',
          title: 'Sales & Purchasing',
          description:
            'Record transactions that automatically update stock and finances.',
        },
        {
          icon: 'ChartColumn',
          title: 'Reporting System',
          description:
            'Generate sales, stock and performance reports in a few clicks.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Role-based Admin Panel',
          description:
            'Control what each staff member can see and do in the system.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: '1',
          label: 'Integrated System',
          description: 'Inventory, sales and purchasing connected.',
        },
        {
          value: 'On-demand',
          label: 'Reports',
          description: 'No more manual compilation.',
        },
        {
          value: 'Real-time',
          label: 'Stock Accuracy',
          description: 'Stock updates with every transaction.',
        },
      ],
      outcomes: [
        'Significantly less manual work in daily operations.',
        'More accurate stock data and faster reconciliation.',
        'Better decisions backed by up-to-date reports.',
        'Improved data security with role-based access.',
      ],
    },
  },
  {
    id: 'vanologiasolutiolibrary',
    title: 'Vanologia Solutio Library',
    category: 'Library System',
    type: 'Business System',
    industry: 'Internal Knowledge Management',
    client: 'Vanologia Solutio (Internal)',
    platform: 'Web-based Knowledge Base',
    description:
      'Knowledge base system for Vanologia Solutio. A system that allows the business to manage their documents, videos, and other resources.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/vlslibrary.webp',
    tags: [
      'Library System',
      'Documentation',
      'File Management System',
      'Admin Panel',
      'Cloud Infrastructure',
    ],
    link: 'https://library.vanologiasolutio.my.id',
    background: {
      overview:
        'As our team and project count grew, documentation, recordings and resources ended up scattered across chat groups and personal drives. Onboarding new members and finding past knowledge became harder than it should be.',
      challenges: [
        'Documents and videos scattered across many tools and personal storage.',
        'Slow onboarding because knowledge was hard to find.',
        'No consistent structure for documentation.',
        'No control over who could access internal resources.',
      ],
    },
    objectives: [
      'Build one central library for all internal knowledge.',
      'Make resources easy to organise and search.',
      'Speed up onboarding for new team members.',
      'Secure access to internal resources.',
    ],
    solution: {
      approach:
        'We built our own knowledge base: a library system to store, organise and share documents, videos and other resources. Backed by cloud infrastructure, it keeps everything in one place and accessible to the right people.',
      features: [
        {
          icon: 'LibraryBig',
          title: 'Central Library',
          description:
            'Documents, videos and resources organised by category and project.',
        },
        {
          icon: 'BookOpenText',
          title: 'Documentation',
          description:
            'Structured, consistent documentation that is easy to write and read.',
        },
        {
          icon: 'FolderOpen',
          title: 'File Management',
          description:
            'Upload, preview and manage files of many formats in one interface.',
        },
        {
          icon: 'Cloud',
          title: 'Cloud Infrastructure',
          description:
            'Reliable storage with access control for every resource.',
        },
      ],
    },
    results: {
      metrics: [
        {
          value: '1',
          label: 'Central Knowledge Hub',
          description: 'All internal resources in one place.',
        },
        {
          value: 'Faster',
          label: 'Onboarding',
          description: 'New members find what they need quickly.',
        },
        {
          value: 'Secure',
          label: 'Access Control',
          description: 'The right resources for the right people.',
        },
      ],
      outcomes: [
        'Internal knowledge is preserved and easy to find.',
        'Smoother onboarding for new team members.',
        'Consistent documentation standards across projects.',
        'Less time spent searching through chats and drives.',
      ],
    },
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    projectId: 'centralmedica',
    name: 'SC',
    role: 'Owner, Central Medica Lampung',
    text: 'Vanologia built a reliable ERP system that streamlined our inventory, reporting, and daily operations. It significantly reduced manual work and improved our overall efficiency.',
    rating: 5,
  },
  {
    id: 2,
    projectId: 'hematindonesia',
    name: 'EC',
    role: 'Owner, Hemat Indonesia',
    text: 'The package tracking system with barcode and webcam integration transformed how we handle logistics. Our inspection process is now faster, more accurate, and fully trackable.',
    rating: 5,
  },
  {
    id: 3,
    projectId: 'cmgestun',
    name: 'BC',
    role: 'Owner, CM Gestun',
    text: 'Our company profile website not only improved our brand presence but also helped us reach more customers online. The team delivered a clean, professional result on time.',
    rating: 5,
  },
  {
    id: 4,
    projectId: 'neomeridian',
    name: 'EK',
    role: 'Owner, Neo Meridian Therapy',
    text: 'The POS and reservation system simplified our sales and booking process. The seamless integration with our printer and reporting tools made daily operations much smoother.',
    rating: 5,
  },
  {
    id: 5,
    projectId: 'aristee',
    name: 'LP',
    role: 'Owner, Klinik Kecantikan Aristée',
    text: 'Thank you, Vanologia Solutio, for your support of Aristée Beauty Clinic. We truly appreciate your prompt responses and your clear understanding of our needs. The landing page, WhatsApp Business setup, catalog upload, and all other deliverables fully met our expectations.',
    rating: 5,
  },
]

export function getProject(id: string) {
  return PROJECTS.find(project => project.id === id)
}

export function getProjectTestimonial(id: string) {
  return TESTIMONIALS.find(testimonial => testimonial.projectId === id)
}

// Previous / next case study, wrapping around the list
export function getAdjacentProjects(id: string) {
  const index = PROJECTS.findIndex(project => project.id === id)
  const total = PROJECTS.length
  return {
    prev: PROJECTS[(index - 1 + total) % total],
    next: PROJECTS[(index + 1) % total],
  }
}

export function getHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

// Cover first, then the extra screenshots, without duplicates.
export function getProjectImages(project: Pick<Project, 'image' | 'images'>) {
  const all = [project.image, ...(project.images ?? [])].filter(
    (src): src is string => Boolean(src),
  )
  return [...new Set(all)]
}
