import mockjs from 'mockjs';
import { delay } from 'roadhog-api-doc';
import { getDashboard } from './mock/dashboard';
import { getTopology } from './mock/topology';
import { getAllApplication, getApplication } from './mock/application';
import { searchServer, getServer } from './mock/server';
import { searchService, getService } from './mock/service';
import { getAlarm, getNoticeAlarm } from './mock/alarm';
import { getAllApplication as getAllApplicationForTrace, getTrace, getSpans } from './mock/trace'

const noMock = process.env.NO_MOCK === 'true';

const proxy = {
  'POST /api/dashboard': getDashboard,
  'POST /api/topology': getTopology,
  'POST /api/application/options': getAllApplication,
  'POST /api/application': getApplication,
  'POST /api/server/search': searchServer,
  'POST /api/server': getServer,
  'POST /api/service/search': searchService,
  'POST /api/service': getService,
  'POST /api/alarm': getAlarm,
  'POST /api/notice': getNoticeAlarm,
  'POST /api/trace/options': getAllApplicationForTrace,
  'POST /api/trace': getTrace,
  'POST /api/spans': getSpans,
};

export default noMock ? {} : delay(proxy, 1000);
