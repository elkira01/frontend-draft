'use client';

import { useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { FoldVertical, Layers, Map, MessageSquare, Users } from 'lucide-react';

const tabs: any[] = [
  {
    key: 'operations',
    label: 'Operations tools',
    content: <div>Layers</div>,
  },
  {
    key: 'sketch',
    label: 'Sketch tools',
    content: <div>Base map</div>,
  },
];

export function DesignToolControl() {
  const [selected, setSelected] = useState(tabs[0]?.key);

  return (
    <div className='m-1.5'>
      <TabGroup className='w-full'>
        <TabList className='flex justify-between items-center bg-[#292929] rounded-sm'>
          {tabs.map((tab) => (
            <Tab
              key={tab.key}
              onClick={() => setSelected(tab.key)}
              className={`w-1/2 py-2 text-white font-light ${selected === tab.key ? 'bg-[#191919] border-none rounded-sm' : 'bg-transparent'}]`}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((tab: any, index: any) => (
            <TabPanel key={index}>{tab.content}</TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
