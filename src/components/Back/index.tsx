import * as React from 'react';
import styles from './index.module.scss';
import arrowLeft from '@/image/arrow-left.svg';

interface Props {
  text: string | number;
  onPress?: () => void;
}

const Back: React.FC<Props> = ({ text, onPress = () => {} }) => {
  return (
    <div className={styles.container} onClick={onPress}>
      <img src={arrowLeft} />
      <span>{text}</span>
    </div>
  );
};

export default Back;
