/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import mockjs from 'mockjs';

export default {
  searchService(req, res) {
    res.json(mockjs.mock(
      {
        data: {
          'searchService|5': [
            {
              'key|+1': 3,
              label: function() { return `service-${this.key}`; }, // eslint-disable-line
            },
          ],
        },
      }
    ));
  },
  getService(req, res) {
    res.json(mockjs.mock(
      {
        data: {
          'searchService|5': [{}],
          getServiceResponseTimeTrend: {
            'trendList|60': ['@natural(100, 1000)'],
          },
          getServiceThroughputTrend: {
            'trendList|60': ['@natural(500, 10000)'],
          },
          getServiceSLATrend: {
            'trendList|60': ['@natural(8000, 10000)'],
          },
          getServiceTopology: () => {
            const upNodes = mockjs.mock({
              'nodes|1-5': [
                {
                  'id|+1': 100,
                  name: '@url',
                  'type|1': ['DUBBO', 'USER', 'SPRINGMVC'],
                  'calls|1000-2000': 1,
                  'sla|1-100.1-2': 1,
                  'numOfServiceAlarm|1-100': 1,
                },
              ],
            });
            const centerNodes = mockjs.mock({
              nodes: [
                {
                  'id|+1': 1,
                  name: '@url',
                  'type|1': ['DUBBO', 'tomcat', 'SPRINGMVC'],
                  'calls|1000-2000': 1,
                  'sla|1-100.1-2': 1,
                  'numOfServiceAlarm|1-100': 1,
                },
              ],
            });
            const downNodes = mockjs.mock({
              'nodes|2-5': [
                {
                  'id|+1': 200,
                  name: '@url',
                  'type|1': ['Oracle', 'MYSQL', 'REDIS'],
                },
              ],
            });
            const nodes = upNodes.nodes.concat(centerNodes.nodes, downNodes.nodes);
            const calls = upNodes.nodes.map(node => (mockjs.mock({
              source: node.id,
              target: 1,
              'isAlert|1': true,
              'callType|1': ['rpc', 'http', 'dubbo'],
              'cpm|0-1000': 1,
              'avgResponseTime|500-5000': 0,
            }))).concat(downNodes.nodes.map(node => (mockjs.mock({
              source: 1,
              target: node.id,
              'isAlert|1': true,
              'callType|1': ['rpc', 'http', 'dubbo'],
              'cpm|0-2000': 1,
              'avgResponseTime|500-5000': 1,
            }))));
            return {
              nodes,
              calls,
            };
          },
        },
      }
    ));
  },
};
