import { ModelMatrixFeature } from './types';

export const compareModelsMatrix: ModelMatrixFeature[] = [
  {
    featureName: 'Live video monitoring',
    petit: true,
    petitPro: true,
    babyLuma: true,
    lunetMonitor: true,
  },
  {
    featureName: 'Sleep tracking',
    petit: true,
    petitPro: true,
    babyLuma: false,
    lunetMonitor: false,
  },
  {
    featureName: 'Cry detection',
    petit: true,
    petitPro: true,
    babyLuma: false,
    lunetMonitor: true,
  },
  {
    featureName: 'Night vision',
    petit: true,
    petitPro: true,
    babyLuma: true,
    lunetMonitor: false,
  },
  {
    featureName: 'Two-way audio',
    petit: true,
    petitPro: true,
    babyLuma: true,
    lunetMonitor: true,
  },
  {
    featureName: 'Room temperature sensor',
    petit: true,
    petitPro: true,
    babyLuma: false,
    lunetMonitor: false,
  },
  {
    featureName: '4K Ultra HD Streaming',
    petit: false,
    petitPro: true,
    babyLuma: false,
    lunetMonitor: false,
  },
  {
    featureName: '360° Pan & Tilt',
    petit: false,
    petitPro: true,
    babyLuma: false,
    lunetMonitor: false,
  },
  {
    featureName: 'Battery Backup',
    petit: '24 Hours',
    petitPro: '48 Hours',
    babyLuma: '12 Hours',
    lunetMonitor: '8 Hours',
  },
  {
    featureName: 'Price',
    petit: '$149',
    petitPro: '$299',
    babyLuma: '$199',
    lunetMonitor: '$249',
  },
];
