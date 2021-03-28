import { css } from '@emotion/css';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    padding: 24px 12px 24px 24px;
    min-width: 500px;
    gap: 16px;
  `,
  info: css`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 24px;
    width: 100%;
    align-items: center;
  `,
  achievement: css`
    display: flex;
    flex-direction: row;
    gap: 8px;
  `,
  projectName: css`
    font-size: 16px;
    font-weight: 700;
    color: #424242;
  `,
  icon: css`
    font-size: 18px;
  `,
};

export default styles;
