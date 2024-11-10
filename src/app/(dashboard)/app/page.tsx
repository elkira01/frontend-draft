import { Fragment } from 'react';
import { ControlMenu } from 'app/(dashboard)/_components/controls/ControlMenu';
import { Col, Row } from 'antd';
import { BoardTimeline } from '@/app/(dashboard)/_components/BoardTimeline';
import { DesignToolControl } from '@/app/(dashboard)/_components/controls/DesignToolControl';

export default function Page() {
  return (
    <Fragment>
      <Row justify='space-between' style={{ height: '100%' }}>
        <Col md={7}>
          <ControlMenu />
        </Col>
        <Col md={13}></Col>
        <Col md={4}>
          <DesignToolControl />
        </Col>
        <Col md={24}>
          <BoardTimeline />
        </Col>
      </Row>
    </Fragment>
  );
}
