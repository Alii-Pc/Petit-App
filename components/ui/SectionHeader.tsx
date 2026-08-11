import React from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  alignment?: 'center' | 'left' | 'right';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  alignment = 'center',
  className,
}) => {
  return (
    <div className={`${styles.header} ${styles[alignment]} ${className || ''}`.trim()}>
      {eyebrow && (
        <div className={styles.eyebrow}>
          {eyebrow}
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
