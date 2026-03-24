import type filterBoxType from "../../types/filterBox";
import { useSearchParams } from "react-router-dom";

const FilterBox = ({ visualType, internType, options }: filterBoxType) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChangeParams(option: string, isChecked: boolean) {
    const currentParams = Object.fromEntries(searchParams);

    let filterOptions = searchParams.has(visualType)
      ? searchParams.get(visualType)?.split(",") || []
      : [];

    if (isChecked) {
      filterOptions.push(option);
    } else {
      filterOptions = filterOptions.filter((opt) => opt !== option);
    }

    if (filterOptions.length === 0) {
      delete currentParams[visualType];
      setSearchParams(currentParams);
    } else {
      currentParams[visualType] = filterOptions.join(",");
      if (typeof internType == "boolean") {
      } else {
        setSearchParams(currentParams);
      }
    }
  }

  return (
    <div className="border border-[#d1d5db] px-5 py-3">
      <h5 className="uppercase text-sm font-medium tracking-wide mb-3">
        {visualType}
      </h5>
      <ul className="flex flex-col gap-2">
        {options.map((option, i) => (
          <li key={i} className="flex items-center gap-x-2.5">
            <input
              type="checkbox"
              id={visualType + "-" + option}
              className="h-3.5 aspect-square cursor-pointer"
              checked={
                searchParams.get(visualType)?.split(",").includes(option) ??
                false
              }
              onChange={(e) => handleChangeParams(option, e.target.checked)}
            />
            <label
              htmlFor={visualType + "-" + option}
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
