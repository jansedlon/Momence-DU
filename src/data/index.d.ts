declare module "*.csv" {
  const content: {
    země: string;
    měna: string;
    množství: number;
    kód: string;
    kurz: number;
  }[];

  export default content;
}
