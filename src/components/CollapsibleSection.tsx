import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

// Define the types for the props of the CollapsibleSection component
interface Item {
  label: string;
  link: string;
}

interface CollapsibleSectionProps {
  title: string;
  icon: React.ComponentType; // This assumes the icon is a React component (e.g., an SVG or font icon)
  items: Item[];
  toggleState: boolean;
  setToggleState: React.Dispatch<React.SetStateAction<boolean>>; // This is for the state setter function
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  icon: Icon,
  items,
  toggleState,
  setToggleState,
}) => {
  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-between w-full p-2 cursor-pointer hover:bg-blue-300 rounded-md transition-all"
        onClick={() => setToggleState(!toggleState)}
      >
        <div className="flex items-center gap-3">
          <Icon />
          <h3 className="text-lg">{title}</h3>
        </div>
        <div>
          {toggleState ? <FaAngleDown /> : <FaAngleLeft />}
        </div>
      </div>
      {toggleState && (
        <ul className="flex flex-col ml-6 mt-2 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="p-2 hover:bg-blue-300 rounded-md">
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollapsibleSection;

