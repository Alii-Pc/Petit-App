import React from 'react';
import styles from './Section.module.css';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  backgroundColor?: 'default' | 'teaser' | 'white' | 'dark';
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  backgroundColor = 'default',
  className,
  containerClassName,
  children,
  ...props
}) => {
  return (
    <section 
      className={`${styles.section} ${styles[backgroundColor]} ${className || ''}`.trim()} 
      {...props}
    >
      <div className={`${styles.container} ${containerClassName || ''}`.trim()}>
        {children}
      </div>
    </section>
  );
};
