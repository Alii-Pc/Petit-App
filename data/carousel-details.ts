export interface DetailSection {
  title: string;
  description: string;
  image?: string;
  bullets?: string[];
}

export interface FeatureDetail {
  id: number;
  mainTitle: string;
  introText: string;
  badges: string[];
  sections: DetailSection[];
}

export const featureDetails: Record<number, FeatureDetail> = {
  1: {
    id: 1,
    mainTitle: 'Your Baby, Always Within Reach',
    introText: 'The little things become the biggest memories. Save milestones, create highlight clips, and share your baby\'s sweetest moments - effortlessly.',
    badges: ['Milestone timeline', 'One-tap clips', 'Secure storage', 'Private sharing'],
    sections: [
      {
        title: 'Automatic Milestone Timeline',
        description: 'Keep special moments organized as your baby grows. Build a beautiful timeline you can revisit anytime.',
        image: '/images/peace-1.jpg'
      },
      {
        title: 'Save Clips in Seconds',
        description: 'See something adorable? Save it instantly from the live view, no complicated steps, no missed memories.',
        bullets: ['One-tap clip saving', 'HD video quality', 'Easy download & share']
      },
      {
        title: 'Secure Cloud Storage',
        description: 'Your memories stay protected and available across devices, so you can look back whenever you want.',
        bullets: ['Encrypted storage', 'Organized by date', 'Access anytime']
      }
    ]
  },
  2: {
    id: 2,
    mainTitle: 'Smart AI Phone Integration',
    introText: 'Stay connected through our intuitive app, featuring background audio, picture-in-picture, and real-time alerts right on your home screen.',
    badges: ['Background audio', 'Picture-in-picture', 'Smart alerts', 'Multi-user access'],
    sections: [
      {
        title: 'Crystal Clear Audio Anywhere',
        description: 'Listen in while using other apps or even when your screen is locked. Perfect for working from home or relaxing.',
        image: '/images/iphone-cam.jpg'
      },
      {
        title: 'Smart Notifications',
        description: 'Only get alerted when it matters. Our AI distinguishes between background noise and your baby crying.',
        bullets: ['Cry detection', 'Room temperature alerts', 'Motion tracking']
      }
    ]
  },
  3: {
    id: 3,
    mainTitle: 'Private & Secured',
    introText: 'Your privacy is our priority. We use bank-level encryption and secure servers to ensure only you and authorized users can access your feed.',
    badges: ['AES-256 Encryption', 'Local mode', 'Two-factor auth', 'Privacy mode'],
    sections: [
      {
        title: 'Bank-Level Security',
        description: 'End-to-end encryption ensures your video stream and data are protected from unauthorized access at all times.',
        image: '/images/petit.jpg'
      },
      {
        title: 'Granular Access Control',
        description: 'Easily share access with grandparents or babysitters, and revoke it instantly when no longer needed.',
        bullets: ['Custom permissions', 'Schedule-based access', 'Activity logs']
      }
    ]
  },
  4: {
    id: 4,
    mainTitle: 'Smart Monitor Sleep Tracking',
    introText: 'Understand your baby\'s sleep patterns with automated analytics, sleep reports, and personalized insights to help everyone get more rest.',
    badges: ['Sleep analytics', 'Night vision', 'White noise', 'Sleep tips'],
    sections: [
      {
        title: 'Advanced Night Vision',
        description: 'Check on your little one without disturbing their sleep, thanks to our invisible infrared LEDs that provide crystal clear video in complete darkness.',
        image: '/images/baby-camera-room.jpg'
      },
      {
        title: 'Comprehensive Sleep Reports',
        description: 'Wake up to a detailed summary of your baby\'s night, helping you establish better routines and healthier sleep habits.',
        bullets: ['Sleep duration', 'Wake events tracking', 'Room environment data']
      }
    ]
  }
};
