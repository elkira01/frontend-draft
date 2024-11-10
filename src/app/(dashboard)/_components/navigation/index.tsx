'use client';

import { Fragment, useEffect, useState } from 'react';
import { FoldVertical, Layers, Map, MessageSquare, Users } from 'lucide-react';
import { MenuItem } from '@/app/(dashboard)/_components/navigation/MenuItem';

const menuGroup = [
  { key: 'layers', label: 'Layers', icon: <Layers /> },
  { key: 'map', label: 'Base map', icon: <Map /> },
  { key: 'group', label: 'Group', icon: <Users /> },
  { key: 'chat', label: 'Chatroom', icon: <MessageSquare /> },
  { key: 'timeline', label: 'Timeline', icon: <FoldVertical /> },
];

export function ControlMenu() {
  useEffect(() => {
    if (typeof window !== undefined) {
      const list = document.querySelectorAll('.ant-menu-item'); // dangerously remove tag style attributes
      list.forEach((item) => item.removeAttribute('style'));
    }
  }, []);

  return (
    <Fragment>
      <div className='w-full absolute left-1 mt-1.5 flex justify-between bg-transparent'>
        <Navigation menuGroup={menuGroup} />
        <div></div>
      </div>
    </Fragment>
  );
}

export const Navigation = ({ menuGroup }: any) => {
  const [active, setActive] = useState<any>('');
  const handleMenu = (index: any, callback: Function) => {
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
          onClick={() => handleMenu(index, () => console.log('clicked', item.label))}
          isActive={active === index}
          key={item.key}
        />
      ))}
    </nav>
  );
};
