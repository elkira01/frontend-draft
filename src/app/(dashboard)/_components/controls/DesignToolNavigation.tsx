'use client';

import { ReactNode, useState } from 'react';
import useBoardView from '@/hooks/app/view/use-board-view';
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
  }

  transition: all 300ms ease-in-out;
`;
const MenuItem = ({
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

export const DesignToolNavigation = ({ menuGroup }: any) => {
  const [active, setActive] = useState<any>('');
  const view = useBoardView();
  const handleMenu = (index: any, callback: any) => {
    setActive(index);
    callback();
  };
  return (
    <nav className='menu flex-col justify-between items-center rounded-sm px-1 bg-[#191919]'>
      {menuGroup?.map((item: any, index: any) => (
        <MenuItem
          className='w-[30px] h-[30px] my-1'
          icon={item.icon}
          label={item.label}
          onClick={() =>
            handleMenu(index, () => {
              switch (item.key) {
                case 'layerPanel':
                  {
                    view.openPanel('layerPanel');
                    view.closePanel('mapPanel');
                  }
                  break;
                case 'mapPanel':
                  {
                    view.openPanel('mapPanel');
                    view.closePanel('layerPanel');
                  }
                  break;
                default:
                  view.openPanel(item.key);
                  break;
              }
            })
          }
          isActive={active === index}
          key={item.key}
        />
      ))}
    </nav>
  );
};
