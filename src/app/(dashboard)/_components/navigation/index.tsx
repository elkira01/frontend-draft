'use client';

import { Fragment, useEffect } from 'react';
import { MenuProps } from 'antd';
import { SC_Menu } from '@/app/(dashboard)/_components/navigation/styled';
import { FoldVertical, Layers, Map, MessageSquare, Users } from 'lucide-react';

const menuGroup1: MenuProps['items'] = [
  // { key: '-', label: '', icon: '' },
  { key: 'layers', label: 'Layers', icon: <Layers /> },
  { key: 'map', label: 'Base map', icon: <Map /> },
  { key: 'group', label: 'Group', icon: <Users /> },
  // Add more menu items as needed
];

const menuGroup2: MenuProps['items'] = [
  { key: 'chat', label: 'Chat', icon: <MessageSquare /> },
  // { key: 'assistant', label: 'AI Assistant', icon: <BotMessageSquare /> },
  { key: 'timeline', label: 'Timeline', icon: <FoldVertical /> },
  // Add more menu items as needed
];
export function Navigation() {
  useEffect(() => {
    if (typeof window !== undefined) {
      const list = document.querySelectorAll('.ant-menu-item'); // dangerously remove tag style attributes
      list.forEach((item) => item.removeAttribute('style'));
    }
  }, []);

  return (
    <Fragment>
      <div className='w-full absolute left-1 mt-1.5 flex-col justify-between rounded-sm bg-white p-1'>
        <div>
          <SC_Menu mode='inline' items={menuGroup1} />
        </div>
        <div>
          <SC_Menu mode='inline' items={menuGroup2} />
        </div>
      </div>
    </Fragment>
  );
}
