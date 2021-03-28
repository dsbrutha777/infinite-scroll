import { memo } from 'react';
import styles from './styles';

const AchievementLabel = ({ icon = null, title = '', value = '' }) => {
  return (
    <div className={styles.container}>
      <div>{icon}</div>
      <div className={styles.text}>{title}</div>
      <div className={styles.text}>{value}</div>
    </div>
  );
};

export default memo(AchievementLabel);
