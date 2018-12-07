import response from 'shared/response';

export function fetchItems(): Promise<any> {
  return Promise.resolve().then(() => response.items);
}

export function fetchUserSegment(): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, 500)).then(() => response.userSegment);
}

export default { fetchItems, fetchUserSegment };