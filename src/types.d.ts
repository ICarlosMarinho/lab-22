type WithChildren<T = {}> = T & { children?: React.ReactNode | string };

declare module "*.jpg" {
  const content: any;
  export default content;
}
