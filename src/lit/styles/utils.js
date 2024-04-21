import { css } from 'lit'

export const repel = css`
  .repel {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: var(--repel-vertical-alignment, center);
    gap: var(--gutter, var(--space-s-l));
  }

  .repel[data-nowrap] {
    flex-wrap: nowrap;
  }
`

export const cluster = css`
  .cluster {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gutter, var(--space-s-l));
    justify-content: var(--cluster-horizontal-alignment, flex-start);
    align-items: var(--cluster-vertical-alignment, center);
  }
`