import type ProductType from "../types/Product";

export default function filterFunction(
  filterOpt: string[],
  initialArray: ProductType[],
  key: string,
) {
  const finalResult: ProductType[] = [];
  if (filterOpt.length > 0) {
    filterOpt.forEach((filter) => {
      const holderArray = initialArray.filter((product) => {
        console.log(product[key as keyof ProductType]);
        console.log(filter);
        if (filter !== "bestseller") {
          return product[key as keyof ProductType] === filter;
        } else {
          return product[key as keyof ProductType] === true;
        }
      });
      finalResult.push(...holderArray);
      console.log(finalResult);
    });
  } else {
    finalResult.push(...initialArray);
  }
  return finalResult;
}
