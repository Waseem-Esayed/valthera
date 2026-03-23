import { Link } from "react-router-dom";

const ResourceNavigation = ({
  resourceType,
  resources,
}: {
  resourceType: string;
  resources: { title: string; destination: string }[];
}) => {
  return (
    <nav className="flex flex-col gap-y-5">
      <span className="text-xl font-medium uppercase">{resourceType}</span>
      <ul className="flex flex-col gap-y-1">
        {resources.map((res, i) => {
          return (
            <li key={i}>
              <Link
                to={res.destination}
                className="text-[#4b5563] text-sm text-nowrap">
                {res.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ResourceNavigation;
