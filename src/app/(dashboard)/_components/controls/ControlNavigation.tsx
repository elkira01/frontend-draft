'use client';

import { useState } from 'react';
import { MenuItem } from '@/app/(dashboard)/_components/controls/MenuItem';
import useBoardView from '@/hooks/app/view/use-board-view';

export const ControlNavigation = ({ menuGroup }: any) => {
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
          className='w-[75px] h-[75px] my-1'
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
