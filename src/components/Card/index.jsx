import { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faStar, faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AchievementLabel from '../AchievementLabel';
import styles from './styles';

const Card = ({ data = [] }) => {
  const { avatarUrl, projectName, forkCount, starCount, watchCount } = data;
  return (
    <Paper classes={{ root: styles.container }}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img width={40} height={40} src={avatarUrl} alt="avatar" />
        </div>
        <div className={styles.projectName}>{projectName}</div>
      </div>
      <div className={styles.achievement}>
        <AchievementLabel
          icon={<FontAwesomeIcon className={styles.icon} icon={faCodeBranch} />}
          title="Fork"
          value={forkCount}
        />
        <AchievementLabel
          icon={<FontAwesomeIcon className={styles.icon} icon={faStar} />}
          title="Star"
          value={starCount}
        />
        <AchievementLabel
          icon={<FontAwesomeIcon className={styles.icon} icon={faEye} />}
          title="Watch"
          value={watchCount}
        />
      </div>
    </Paper>
  );
};

export default memo(Card);
