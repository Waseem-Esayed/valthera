import type ProductType from "../types/Product";

export default function filterFunction(
  filterOpt: string[],
  initialArray: ProductType[],
  key: string,
) {
  const finalResult: ProductType[] = [];
  if (filterOpt.length > 0) {
    filterOpt.forEach((filter) => {
      const holderArray = initialArray.filter((p) => {
        if (filter !== "bestseller") {
          return p[key as keyof ProductType] === filter;
        } else {
          return p[key as keyof ProductType] === true;
        }
      });
      finalResult.push(...holderArray);
    });
  } else {
    finalResult.push(...initialArray);
  }
  return finalResult;
}
