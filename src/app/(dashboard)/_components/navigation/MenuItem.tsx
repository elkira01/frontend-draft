import { ReactNode } from 'react';
import styled from 'styled-components';

const SC_MenuItem = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2px;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;

  color: ${(props) => (props.active ? '#ffffff' : 'rgba(187,187,187,0.76)')};
  background-color: ${(props) => (props.active ? '#222222' : '#191919')};

  &:hover {
    background: #222222;
    //margin: 1px;
  }
`;
export const MenuItem = ({
  icon,
  label,
  onClick,
  className,
  isActive,
}: {
  icon: ReactNode;
  label: string;
  onClick: Function;
  className: any;
  isActive: boolean;
}) => {
  return (
    <SC_MenuItem onClick={() => onClick()} className={className} active={isActive}>
      <div>{icon}</div>
      <span className='font-light text-[0.75rem]'>{label}</span>
    </SC_MenuItem>
  );
};
