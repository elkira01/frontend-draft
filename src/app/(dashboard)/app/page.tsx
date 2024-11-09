import { Col, Layout, Row } from 'antd';
import { Fragment } from 'react';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { MenuOutlined } from '@ant-design/icons';

// const { Header, Content, Sider, Footer } = Layout;

export default function Page() {
  return (
    <Fragment>
      <Header className='w-full' style={{ backgroundColor: 'white' }}>
        <Row justify='space-between' gutter={[24, 0]}>
          <Col sm={12}>
            <Row justify='start'>
              <Col sm={6}>
                <MenuOutlined size={60} />
              </Col>
              <Col sm={18}>
                <h1>Map project title</h1>
              </Col>
            </Row>
          </Col>
          <Col sm={12}></Col>
        </Row>
      </Header>
      <Content>
        <Layout>
          <Sider></Sider>
          <Content></Content>
        </Layout>
      </Content>
      <Footer></Footer>
    </Fragment>
  );
}
