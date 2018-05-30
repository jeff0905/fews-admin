
import React, { PureComponent } from 'react';
import PageHeader from '../../components/PageHeader';
import { Tabs } from 'antd';
import { Row, Col, Card, Tooltip, Icon } from 'antd';
import { connect } from 'dva';

const TabPane = Tabs.TabPane;
const breadcrumbList = [{
  title: '监控',
  href: '/',
}, {
  title: '概览',
  href: '/',
}, {
  title: '应用详情',
}];
const tabList = [
  {key: 'detail', tab: '详情'},
  {key: 'rule',tab: '最新发布'},
  {key: 'depend', tab: '依赖关系'},
  {key: 'time', tab: '耗时'}
];

@connect(state => ({
  detail: state.detail
}))
export default class AppDetail extends PureComponent {

  callback () {

  }

  render () {
    return (
      <div>
        <PageHeader
          breadcrumbList={breadcrumbList}
          // tabList={tabList}
        >

        </PageHeader>

        <Tabs defaultActiveKey="detail" onChange={() => this.callback()}>
          <TabPane tab={tabList[0].tab} key="detail">
              <Row>
                <Col>a</Col>
                <Col>b</Col>
              </Row>
          </TabPane>
          <TabPane tab={tabList[1].tab} key="rule">Content of Tab Pane 1</TabPane>
          <TabPane tab={tabList[2].tab} key="depend">Content of Tab Pane 2</TabPane>
          <TabPane tab={tabList[3].tab} key="time">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    )
  }
}
