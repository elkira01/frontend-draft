import {
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  TabProps as HeadlessProps,
} from '@headlessui/react';
import { ReactNode } from 'react';

export interface AppTabProps extends HeadlessProps {
  tabs: Array<{ label: string; key: any }>;
  children: ReactNode[];
}

function Tabs(props: AppTabProps) {
  return (
    <TabGroup className='w-full'>
      <TabList>
        {props.tabs.map((tab) => (
          <Tab key={tab.key}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {props.tabs.map((tab, index) => (
          <TabPanel key={tab.key}>{props.children[index]}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}

export default Tabs;
