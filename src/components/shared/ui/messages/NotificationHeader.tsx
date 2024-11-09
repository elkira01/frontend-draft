'use client';

import styled from 'styled-components';
import React from 'react';

const SC_Component = styled.div`
  height: 42px;

  div {
    height: 42px;
    max-width: ${({ theme }) => theme.maxContainerWidth};
    margin-inline: auto;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    color: white;
    text-transform: uppercase;
    padding-block: 9px;
  }
`;

export function NotificationHeader({ children, themeColor }: { children: any[]; themeColor: any }) {
  const [index, setIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % children.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [children.length]);

  return (
    <SC_Component style={{ background: themeColor }}>
      <div className='content'>{children[index]}</div>
    </SC_Component>
  );
}
