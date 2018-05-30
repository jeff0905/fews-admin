
import request from '../utils/request';

/** appDetail  */
export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}
