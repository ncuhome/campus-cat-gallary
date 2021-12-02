import * as React from 'react';
import styles from './index.module.scss';
import arrowRight from '@/image/arrow-right.svg';
import clsx from 'clsx';

interface Props {
  onPress?: () => void;
  type?: 'circle' | 'normal' | 'text';
  text?: string;
  showIcon?: boolean;
}

const Button: React.FC<Props> = ({ onPress, text, type = 'circle', showIcon = true }) => {
  const renderButton = () => {
    if (type === 'text') {
      return (
        <div onClick={onPress}>
          <span className={styles.text} style={{ fontSize: 16 }}>
            {text}
          </span>
        </div>
      );
    }

    if (type === 'normal') {
      return (
        <button onClick={onPress} className={clsx(styles.button, styles.normal)}>
          {showIcon && (
            <div className={styles.iconContainer} style={{ marginRight: 12 }}>
              <img src={arrowRight} alt={'arrow'} />
            </div>
          )}
          <span className={styles.text}>{text}</span>
        </button>
      );
    }

    if (type === 'circle') {
      return (
        <>
          <button onClick={onPress} className={clsx(styles.button)}>
            <div className={styles.iconContainer}>
              <img src={arrowRight} alt={'arrow'} />
            </div>
          </button>
          {text && <span className={styles.tip}>{text}</span>}
        </>
      );
    }
    return null;
  };
  return <div className={styles.container}>{renderButton()}</div>;
};

export default Button;

