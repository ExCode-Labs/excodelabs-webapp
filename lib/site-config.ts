export const siteConfig = {
  company: {
    name: 'EXCODE Labs',
    shortName: 'EXCODE',
    logoPath: '/EXcode-logo.svg',
    description:
      'We build web, mobile, and desktop products for teams that want software they can trust in production, not just in demos.',
  },
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/careers', label: 'Careers' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  contact: {
    email: 'support@excodelabs.com',
    phone: '+91 8987291350',
    address: 'Stage 2, BTM Layout, Bengaluru, Karnataka',
    addressFull:
      '1265, 15th Main Rd, Madina Nagar, Stage 2, BTM Layout, Bengaluru, Karnataka 560076',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15555.83889885402!2d77.61422534689324!3d12.910310148389051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s15th%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1778307251137!5m2!1sen!2sin',
  },
  socialLinks: [
    {
      label: 'GitHub',
      target: 'blank',
      href: 'https://github.com/ExCode-Labs',
    },
  ],
  home: {
    hero: {
      heading:
        'Building Scalable Web and Mobile Solutions for Modern Businesses',
      subtext:
        'From rough idea to live release, we handle design and engineering together so your team can ship faster without creating future tech debt.',
      ctaLabel: 'Hire Us',
      ctaHref: '/contact',
    },
    contactPromo: {
      heading: 'Need a trusted product partner?',
      text: 'We work like an extension of your team: clear weekly updates, practical trade-offs, and code your in-house developers can maintain.',
      ctaLabel: 'Explore Services',
      ctaHref: '/services',
    },
  },
  about: {
    mission:
      'Our job is simple: help good teams ship better products. We ask hard product questions early, keep scope realistic, and build systems that stay reliable as traffic, features, and team size grow.',
  },
  careers: {
    whyWorkWithUs: [
      {
        title: 'Growth',
        description:
          'You get direct mentorship, a learning budget you can actually use, and ownership of features from planning to release.',
      },
      {
        title: 'Benefits',
        description:
          'Flexible schedules, health support, and tools that help you focus on real work instead of process overhead.',
      },
      {
        title: 'Impact',
        description:
          'Your work ships to real users and is measured by product outcomes, not presentation slides.',
      },
    ],
  },
  services: [
    {
      title: 'Web Platform Engineering',
      description:
        'We build websites and web apps that are fast, reliable, and easy to maintain as your product and team grow.',
      icon: '🌐',
    },
    {
      title: 'Mobile App Development',
      description:
        'From first install to daily use, we design mobile apps around clear onboarding, strong performance, and stable offline behavior.',
      icon: '📱',
    },
    {
      title: 'Desktop Applications',
      description:
        'We create desktop tools for operations teams and power users who need speed, stability, and fewer repetitive manual steps.',
      icon: '🖥️',
    },
    {
      title: 'Product Strategy & Scaling',
      description:
        'We help you make practical product and architecture decisions so you can scale without constant rewrites.',
      icon: '🚀',
    },
  ],
  portfolioProjects: [
    {
      name: 'Hotel Booking Engine',
      summary:
        'A booking platform that brought reservations, pricing, and payments into one flow across mobile and desktop.',
      problem:
        'The team was juggling disconnected tools, which led to overbookings and manual reconciliation at the end of each day.',
      solution:
        'We built a centralized engine with real-time room inventory sync and role-based dashboards for hotel staff.',
      outcome:
        'Checkout completion improved by 42%, and support tickets related to booking conflicts dropped by 28% in 90 days.',
      stack: ['Next.js', 'Node.js', 'PostgreSQL'],
    },
    {
      name: 'Nursing School Portal',
      summary:
        'A student and faculty portal covering admissions, coursework, exam scheduling, and compliance tasks.',
      problem:
        'Accreditation reporting took too long, and student communication was split across too many channels.',
      solution:
        'We delivered a secure portal with structured modules, centralized announcements, and report exports for audits.',
      outcome:
        'The admissions team reduced manual effort by 35%, and compliance report preparation time dropped by 50%.',
      stack: ['React', 'Next.js', 'Prisma', 'MongoDB'],
    },
    {
      name: 'Gangakoshi Agritech Suite',
      summary:
        'An operations suite for farm planning, inventory movement, and procurement tracking across locations.',
      problem:
        'Field teams captured data in different formats, and leadership had no single view across locations.',
      solution:
        'We implemented synced field forms, approval workflows, and forecasting dashboards tied to daily operations.',
      outcome:
        'Planning accuracy improved by 31%, and delayed procurement incidents dropped by 24%.',
      stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    },
  ],
  testimonials: [
    {
      quote:
        'For our agritech suite, field updates used to come in through calls and spreadsheets. EXCODE built synced mobile forms and approval flows, so our operations team now tracks inventory and procurement in one place without daily reconciliation.',
      author: 'Vikash Kumar',
      role: 'CEO, Gangakoshi Agritech Pvt Ltd',
    },
    {
      quote:
        'Our nursing school portal replaced manual admissions tracking and scattered exam notices. Students now see schedules and updates in one dashboard, and our admin team can generate compliance reports in minutes instead of days.',
      author: 'Sanjay Kumar',
      role: 'Director, Rajgir ANM Nursing School',
    },
  ],
  clients: ['Rajgir ANM Nursing School', 'Gangakoshi Agritech Pvt Ltd'],
  jobs: [
    {
      title: 'Frontend Engineer (React/Next.js)',
      description:
        'Build fast, accessible interfaces with design and backend teammates, and take features from idea to production.',
      location: 'Remote / Hybrid',
    },
    {
      title: 'Backend Engineer (Node.js)',
      description:
        'Design APIs, data models, and observability pipelines that stay reliable under production traffic.',
      location: 'Remote',
    },
  ],
  team: [
    {
      name: 'Riya Sen',
      role: 'CEO & Product Strategist',
      bio: 'Leads product direction, aligns business goals with execution, and keeps delivery focused and realistic.',
    },
    {
      name: 'Neel Verma',
      role: 'CTO',
      bio: 'Owns architecture and technical direction, with a strong focus on reliability, performance, and code quality.',
    },
    {
      name: 'Disha Kapoor',
      role: 'Design Lead',
      bio: 'Shapes brand and product interfaces with clarity, accessibility, and consistency across every touchpoint.',
    },
  ],
  values: [
    {
      title: 'Innovation',
      description:
        'We solve business problems with practical technology choices, quick feedback loops, and steady iteration.',
    },
    {
      title: 'Reliability',
      description:
        'We build resilient systems and communicate clearly, so there are no surprises during delivery.',
    },
    {
      title: 'Accessibility',
      description:
        'We design products that are inclusive, easy to use, and clear for people with different needs and contexts.',
    },
  ],
};
