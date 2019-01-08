export type Item = {
  id: string,
  title: string,
  src: string,
  description: string
};

export type Response = {
  items: Array<Item>,
  userSegment: Object
};