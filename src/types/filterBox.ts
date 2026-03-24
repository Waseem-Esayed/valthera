export default interface FilterBox {
  visualType: string;
  internType: string | boolean;
  options: {
    name: string;
    value: string | boolean;
  };
}
