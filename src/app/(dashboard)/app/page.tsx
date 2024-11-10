import { Fragment } from 'react';
// import { Content } from 'antd/es/layout/layout';
// import Sider from 'antd/es/layout/Sider';
import { ControlMenu } from '@/app/(dashboard)/_components/navigation';
import { Col, Row } from 'antd';

export default function Page() {
  return (
    <Fragment>
      <Row justify='space-between' style={{ height: '100%' }}>
        <Col md={7} style={{ height: '100%' }}>
          <ControlMenu />
        </Col>
        <Col md={15}></Col>
        <Col md={2}>
          <nav className='text-white'>Design tools</nav>
        </Col>
      </Row>
    </Fragment>
  );
}
