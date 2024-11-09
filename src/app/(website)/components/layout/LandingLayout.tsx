import React, { ReactNode } from 'react';
import { TextReveal } from '@/components/base/Reveal/TextReveal';
import { Layout } from 'antd';

function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className='w-full'>
      {/*<NotificationHeader themeColor='rgba(27, 119, 100, 0.95)'>*/}
      {/*  <TextReveal*/}
      {/*    key={1}*/}
      {/*    content='Take advantage of the great promotion for the launching of your new platform !!!'*/}
      {/*  />*/}
      {/*  <TextReveal key={2} content='30% off on every books' type='fade' />*/}
      {/*</NotificationHeader>*/}
        <Layout>
            {children}
        </Layout>
    </div>
  );
}

export default LandingLayout;
