import { css } from '@emotion/css';

const styles = {
  container: css`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
    grid-column-gap: 4px;
    align-items: center;
    border: #424242 2px solid;
    border-radius: 20px;
    padding: 4px 8px;
  `,
  text: css`
    font-size: 16px;
    font-weight: 700;
  `,
};

export default styles;
