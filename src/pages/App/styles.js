import { css } from '@emotion/css';

const styles = {
  layout: css`
    font-family: monospace;
    overflow-y: hidden;
    max-height: 100vh;
  `,
  title: css`
    font-size: 24px;
  `,
  subTitle: css`
    font-size: 20px;
  `,
  top: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 24px;
    box-shadow: 0px 2px 2px grey;
    z-index: 10;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    overflow-y: auto;
    max-height: calc(100vh - 200px);
    padding: 24px;
  `,
  outlinedInputRoot: css`
    height: 36px;
  `,
};

export default styles;
