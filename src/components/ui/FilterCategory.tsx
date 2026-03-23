import type filterBoxType from "../../types/filterBox";
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
    <div className="border border-[#d1d5db] px-5 py-3">
      <h5 className="uppercase text-sm font-medium tracking-wide mb-2.5">
        {type}
      </h5>
      <ul>
        {options.map((option: string, i: number) => (
          <li key={i} className="mb-1.5 flex items-center gap-x-2">
            <input
              type="checkbox"
              id={option}
              className="h-3.5 aspect-square cursor-pointer"
              onChange={(e) => handleChangeParams(option, e.target.checked)}
            />
            <label
              htmlFor={option}
              className="capitalize text-[#374151] text-sm font-light cursor-pointer"
            >
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBox;
