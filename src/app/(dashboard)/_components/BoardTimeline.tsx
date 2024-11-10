'use client';

import styled from 'styled-components';
import { Fragment } from 'react';
import { X } from 'lucide-react';
import useBoardView from '@/hooks/app/view/use-board-view';

const SC_Layout = styled.div`
  width: 99%;
  margin-inline: auto;
  background-color: white;
  height: 35vh;

  //@keyframes slide-x {
  //  0% {
  //    transform: translateX(100%);
  //  }
  //  100% {
  //    transform: translateX(0);
  //  }
  //}

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
    animation-name: slide-y;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
  }
`;
export function BoardTimeline() {
  const view = useBoardView();
  return (
    <Fragment>
      {view.timelinePanel && (
        <SC_Layout>
          <header className='text-lg bg-white p-2 flex justify-between items-center border-b'>
            <h3 className='font-medium'>Board Timeline</h3>
            <X
              className='cursor-pointer hover:border hover:border-black'
              onClick={() => view.closePanel('timelinePanel')}
            />
          </header>
          <section className='shadow-inner'>
            <img src='/timeline.png' alt='atl' className='w-full' />
          </section>
        </SC_Layout>
      )}
    </Fragment>
  );
}
