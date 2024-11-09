'use client';

import styled from 'styled-components';
import { Menu } from 'antd';

export const SC_Menu = styled(Menu)`
  border: none;
  background-color: transparent;
  &.ant-menu.ant-menu-root.ant-menu-inline {
    border-inline-end: none;

    li {
      padding-left: 10px;
    }
  }
`;
