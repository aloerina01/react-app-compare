import response from 'shared/response';
import * as Types from 'shared/types';

export function fetchItems(): Promise<Array<Types.Item>> {
  return Promise.resolve().then(() => response.items);
}

export function fetchUserSegment(): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, 500)).then(() => response.userSegment);
}

export default { fetchItems, fetchUserSegment };