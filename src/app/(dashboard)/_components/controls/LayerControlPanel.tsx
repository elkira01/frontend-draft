import styled from 'styled-components';
import { Layers3, Search, X } from 'lucide-react';
import { Input } from 'antd';
import useBoardView from '@/hooks/app/view/use-board-view';

const SC_Panel = styled.div`
  background-color: #f2f2f2;
  border-radius: 2px;
  width: 60%;

  .search-bar {
    position: relative;

    input.ant-input {
      border-radius: 0;
      border-top: none;
      padding: 10px 8px;
    }

    .ant-input-outlined:focus-within,
    :hover {
      border-color: silver;
    }

    svg {
      position: absolute;
      top: 10px;
      right: 10px;
      color: silver;
    }
  }
`;
export function LayerControlPanel() {
  const view = useBoardView();
  return (
    <SC_Panel>
      <header className='text-lg bg-white p-2 flex justify-between items-center border-b'>
        <h3 className='font-medium'>Layers</h3>
        <X
          className='cursor-pointer hover:border hover:border-black'
          onClick={() => view.closePanel('layerPanel')}
        />
      </header>
      <section className='search-bar'>
        <Input placeholder='Search layers' />
        <Search />
      </section>
      <section className='search-results h-full'>
        <div className='mx-auto my-28 flex-col w-fit text-gray-400'>
          <Layers3 className='mx-auto' />
          <div className='my-1'>No results found</div>
        </div>
      </section>
    </SC_Panel>
  );
}
