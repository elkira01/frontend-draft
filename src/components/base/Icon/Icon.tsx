'use client';

import styled from 'styled-components';

export const Icon = styled.div<{ size: number }>`
  //width: ${(props) => `${props.size}px`};
  //height: ${(props) => `${props.size}px`};

  .anticon {
    svg {
      width: ${(props) => `${props.size}px`};
      height: ${(props) => `${props.size}px`};
    }
  }
`;
