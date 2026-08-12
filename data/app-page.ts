export interface AppFeature {
  title: string;
  description: string;
  icon: string;
}

export interface AppSpec {
  name: string;
  value: string;
}

export const appPageHeroData = {
  title: 'Petit Smart Baby Monitor App',
  subtitle: 'Stay connected to your little one from anywhere with real-time HD video streaming, cry detection, and personalized sleep insights.',
  badgeText: 'Included Free with Every Petit Monitor',
  appStoreUrl: '#',
  playStoreUrl: '#',
  mainImage: '/images/iphone-cam.jpg',
};

export const appGridFeatures: AppFeature[] = [
  {
    title: 'Real-Time HD Live Stream',
    description: 'Experience ultra-low latency 2K video streaming with smooth pan, zoom, and instant audio feedback.',
    icon: '📱',
  },
  {
    title: 'Smart Cry & Sound Alerts',
    description: 'Advanced AI filters out room noise to notify you immediately when your baby wakes or cries.',
    icon: '🔔',
  },
  {
    title: 'Automated Night Vision',
    description: 'Crisp infrared vision engages automatically in the dark, giving you clear sight without glowing lights.',
    icon: '🌙',
  },
  {
    title: 'Temperature & Environment',
    description: 'Continuous room temperature and humidity tracking with custom threshold alerts for safe sleep.',
    icon: '🌡️',
  },
  {
    title: 'Secure Family Sharing',
    description: 'Grant encrypted, view-only access to grandparents and family members with fine-grained permissions.',
    icon: '👨‍👩‍👧',
  },
  {
    title: 'Daily Sleep Reports',
    description: 'Understand sleep patterns, nap durations, and nightly wakeups with automated daily recap charts.',
    icon: '📊',
  },
];

export const appTechnicalSpecs: AppSpec[] = [
  { name: 'Supported Platforms', value: 'iOS 12.0+ / Android 8.0+ (Smartphones & Tablets)' },
  { name: 'Video Quality Support', value: '2K QHD (2304×1296) / 1080p Full HD' },
  { name: 'Encryption Standard', value: 'Bank-Grade AES 256-bit & TLS 1.3' },
  { name: 'Alert Latency', value: '< 0.5 Seconds Instant Push Notification' },
  { name: 'Multi-User Access', value: 'Up to 5 simultaneous encrypted connections' },
  { name: 'Cloud & Local Backup', value: 'Unlimited 7-day rolling cloud clips' },
];
