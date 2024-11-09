'use client';

import { Avatar, Dropdown, MenuProps } from 'antd';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  //background-color: silver;

  .fore-front {
    height: 100%;
    .profile-name {
      color: black;
    }

    .profile-email {
      color: grey;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;
export const ProfileDropdown = ({ firstName, lastName, email }: any) => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'text.personal.space',
      icon: <UserOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: 'text.personal.space',
      icon: <SettingOutlined />,
    },
    {
      key: '3',
      label: 'text.logout',
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  return (
    <Wrapper>
      <Dropdown menu={{ items }} placement='bottomRight' arrow>
        <div className='fore-front'>
          <Avatar
            size='large'
            icon={<UserOutlined />}
            className='cursor-pointer'
            alt='User profile'
          />
          {/*<span className='profile-name'>*/}
          {/*  {firstName} {lastName}*/}
          {/*</span>*/}
          {/*<span>{email ?? 'customer@kimmodeals.cm'}</span>*/}
        </div>
      </Dropdown>
    </Wrapper>
  );
};
