import type filterBoxType from "../../types/FilterBox";
import { useSearchParams } from "react-router-dom";

const FilterBox = ({ type, options }: filterBoxType) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChangeParams(option: string, isChecked: boolean) {
    const currentParams = Object.fromEntries(searchParams);

    let filterOptions = searchParams.has(type)
      ? searchParams.get(type)?.split(",") || []
      : [];

    if (isChecked) {
      filterOptions.push(option);
    } else {
      filterOptions = filterOptions.filter((opt) => opt !== option);
    }

    if (filterOptions.length === 0) {
      delete currentParams[type];
      setSearchParams(currentParams);
    } else {
      currentParams[type] = filterOptions.join(",");
      setSearchParams(currentParams);
    }
  }

  return (
    <div className="border border-[#d1d5db] px-5 py-3 mb-5">
      <h5 className="uppercase text-sm font-medium tracking-wide mb-3">
        {type}
      </h5>
      <ul className="flex flex-col gap-2">
        {options.map((option: string, i: number) => (
          <li key={i} className="flex items-center gap-x-2.5">
            <input
              type="checkbox"
              id={type + "-" + option}
              className="h-4 cursor-pointer"
              checked={
                searchParams.get(type)?.split(",").includes(option) ?? false
              }
              onChange={(e) => handleChangeParams(option, e.target.checked)}
            />
            <label
              htmlFor={type + "-" + option}
              className="capitalize text-[#374151] text-sm font-light cursor-pointer">
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBox;
