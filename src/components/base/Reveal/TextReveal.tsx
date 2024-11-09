'use client';

import styled from 'styled-components';

const SC_Reveal = styled.p<{ type: 'fade' | 'slide-x' | 'slide-y' }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slide-x {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide-y {
    0% {
      color: transparent;
      transform: translateY(100%);
    }
    80% {
      color: white;
    }
    100% {
      transform: translateY(0);
    }
  }

  & {
    overflow: hidden;
    animation-name: ${(props) => props.type};
    animation-duration: 1.5s;
    animation-iteration-count: 1;
  }
`;

export const TextReveal = ({
  content,
  type,
}: {
  content: any;
  type?: 'fade' | 'slide-x' | 'slide-y';
}) => <SC_Reveal type={type ?? 'slide-y'}>{content}</SC_Reveal>;
