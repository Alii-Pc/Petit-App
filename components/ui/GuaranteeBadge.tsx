import React from 'react';
import Image from 'next/image';
import styles from './GuaranteeBadge.module.css';

interface GuaranteeBadgeProps {
  className?: string;
}

export const GuaranteeBadge: React.FC<GuaranteeBadgeProps> = ({ className }) => {
  return (
    <div className={`${styles.badge} ${className || ''}`.trim()}>
      <Image
        src="/images/calendar-heart.png"
        alt="Calendar Guarantee Icon"
        width={20}
        height={20}
        className={styles.icon}
      />
      <span>30 days to love it or your money back</span>
    </div>
  );
};
