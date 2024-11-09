import { Col, Layout, Row } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { MenuOutlined } from '@ant-design/icons';
import { ProfileDropdown } from '@/components/shared/entities/ProfileDropdown';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className='h-[100vh]'>
      <Header className='w-full' style={{ backgroundColor: 'white' }}>
        <Row justify='space-between' gutter={[24, 0]}>
          <Col sm={12}>
            <Row justify='start' gutter={[24, 6]}>
              <Col xs={1}>
                <MenuOutlined />
              </Col>
              <Col xs={23}>
                <h1>Map project title</h1>
              </Col>
            </Row>
          </Col>
          <Col xs={12} style={{ display: 'flex', justifyContent: 'end' }}>
            <ProfileDropdown firstName='First name' lastName='Last name' />
          </Col>
        </Row>
      </Header>
      <Content>{children}</Content>
      {/*<Footer></Footer>*/}
    </Layout>
  );
}
