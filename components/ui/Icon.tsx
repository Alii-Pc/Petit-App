import React from 'react';
import Image from 'next/image';

export type IconName = 'tick-green' | 'close-red' | 'tick-petit' | 'calendar-heart';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  alt?: string;
}

const iconMap: Record<IconName, string> = {
  'tick-green': '/images/tick-green.png',
  'close-red': '/images/close-red.png',
  'tick-petit': '/images/tick-petit.png',
  'calendar-heart': '/images/calendar-heart.png',
};

export const Icon: React.FC<IconProps> = ({ name, size = 24, className, alt }) => {
  return (
    <Image
      src={iconMap[name]}
      alt={alt || name}
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
