
import React, { PureComponent } from 'react';
import { Row, Col, Card, Tooltip, Icon } from 'antd';

export default class Overview extends PureComponent {

  render () {
    return (
      <Row gutter={8}>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
            a1
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            a2
        </Col>
        <Col xs={24} sm={24} md={12} lg={3} xl={3}>
            a3
        </Col>
      </Row>
    )
  }
}
