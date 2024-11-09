import { Col, FloatButton, Layout, Row } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { ProfileDropdown } from '@/components/shared/entities/ProfileDropdown';
import { AliwangwangOutlined } from '@ant-design/icons';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className='h-[100vh]'>
      <Header
        className='w-full'
        style={{ backgroundColor: 'white', height: '65px', paddingInline: 0 }}
      >
        <Row justify='space-between' gutter={[24, 0]} className='w-full'>
          <Col
            sm={12}
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              columnGap: '8px',
            }}
          >
            {/*<Menu />*/}
            <h1 className='mx-6 text-lg font-medium capitalize'>Map project title</h1>
          </Col>
          <Col xs={12} style={{ display: 'flex', justifyContent: 'end' }}>
            <ProfileDropdown firstName='First name' lastName='Last name' />
          </Col>
        </Row>
      </Header>
      <Content style={{ backgroundColor: 'black' }}>{children}</Content>
      <FloatButton
        icon={<AliwangwangOutlined style={{ fontSize: '1.5rem' }} />}
        style={{
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </Layout>
  );
}
