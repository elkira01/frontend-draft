'use client';

import { Fragment } from 'react';
import { FoldVertical, Layers, Map, MessageSquare, Users } from 'lucide-react';
import { LayerControlPanel } from '@/app/(dashboard)/_components/controls/LayerControlPanel';
import { ControlNavigation } from '@/app/(dashboard)/_components/controls/ControlNavigation';
import { BaseMapControlPanel } from '@/app/(dashboard)/_components/controls/BaseMapControlPanel';
import useBoardView from '@/hooks/app/view/use-board-view';

const menuGroup = [
  { key: 'layerPanel', label: 'Layers', icon: <Layers /> },
  { key: 'mapPanel', label: 'Base map', icon: <Map /> },
  { key: 'groupPanel', label: 'Group', icon: <Users /> },
  { key: 'chatRoom', label: 'Chatroom', icon: <MessageSquare /> },
  { key: 'timelinePanel', label: 'Timeline', icon: <FoldVertical /> },
];

export function ControlMenu() {
  const view = useBoardView();

  return (
    <Fragment>
      <div className='w-full m-1.5 flex justify-start gap-x-4 bg-transparent'>
        <ControlNavigation menuGroup={menuGroup} />
        {view.layerPanel && <LayerControlPanel />}
        {view.mapPanel && <BaseMapControlPanel />}
      </div>
    </Fragment>
  );
}
