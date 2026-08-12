export interface QuizOption {
  id: string;
  title: string;
  subtitle: string;
  targetModel: 'petit' | 'petit-pro';
}

export interface QuizQuestion {
  id: number;
  title: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: 'How do you imagine the first few weeks of caring for your baby?',
    options: [
      {
        id: 'spontaneity',
        title: 'Spontaneity and in-the-moment care',
        subtitle: 'I respond to my baby\'s needs and cries as they happen; technology should simply be there to support me.',
        targetModel: 'petit',
      },
      {
        id: 'tracking',
        title: 'Tracking patterns and planning',
        subtitle: 'I like observing how sleep times and habits evolve to help organize our daily routine more easily.',
        targetModel: 'petit-pro',
      },
    ],
  },
  {
    id: 2,
    title: 'Where will your baby primarily sleep?',
    options: [
      {
        id: 'same-room',
        title: 'In our room',
        subtitle: 'We want our baby close by for the first few months for easier nighttime feeding and comforting.',
        targetModel: 'petit',
      },
      {
        id: 'own-room',
        title: 'In their own nursery',
        subtitle: 'Our baby will have a dedicated space from the start, so we need a reliable way to keep an eye on them.',
        targetModel: 'petit-pro',
      },
    ],
  },
  {
    id: 3,
    title: 'How important is crystal clear night vision to you?',
    options: [
      {
        id: 'standard',
        title: 'Basic visibility is fine',
        subtitle: 'I just need to see if they are awake or asleep, standard night vision works for us.',
        targetModel: 'petit',
      },
      {
        id: 'advanced',
        title: 'Every detail matters',
        subtitle: 'I want ultra-clear, detailed night vision to see their exact movements without turning on any lights.',
        targetModel: 'petit-pro',
      },
    ],
  },
  {
    id: 4,
    title: 'Are you planning to travel often with your baby?',
    options: [
      {
        id: 'homebody',
        title: 'Mostly at home',
        subtitle: 'We prefer our own space and don\'t anticipate taking the monitor on frequent trips.',
        targetModel: 'petit-pro',
      },
      {
        id: 'traveler',
        title: 'Always on the go',
        subtitle: 'We travel often to visit family and friends, so we need a monitor that\'s easy to pack and set up anywhere.',
        targetModel: 'petit',
      },
    ],
  },
  {
    id: 5,
    title: 'How do you want to receive alerts?',
    options: [
      {
        id: 'sound',
        title: 'Just the essentials',
        subtitle: 'A simple notification when they wake up or start crying is all I really need.',
        targetModel: 'petit',
      },
      {
        id: 'smart',
        title: 'Smart, detailed insights',
        subtitle: 'I want AI-powered alerts for motion, specific cry types, and room temperature changes.',
        targetModel: 'petit-pro',
      },
    ],
  },
];
