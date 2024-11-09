import { Fragment } from 'react';
// import { Content } from 'antd/es/layout/layout';
// import Sider from 'antd/es/layout/Sider';
import { Navigation } from '@/app/(dashboard)/_components/navigation';
import { Col, Row } from 'antd';

export default function Page() {
  return (
    <Fragment>
      <Row justify='space-between' style={{ height: '100%' }}>
        <Col md={3} style={{ height: '100%' }}>
          <Navigation />
        </Col>
        <Col md={19}></Col>
        <Col md={2}>
          <nav className='text-white'>Design tools</nav>
        </Col>
      </Row>
    </Fragment>
  );
}
