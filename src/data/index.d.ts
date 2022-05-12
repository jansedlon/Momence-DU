declare module "*.csv" {
  const content: Record<string, string | number>[];

  export default content;
}
