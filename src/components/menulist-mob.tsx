import { Link } from "react-router-dom";
import { navbar_List } from "./navigation";
interface Props {
  func: () => void;
}
export const MobileMenu = ({ func }: Props) => {
  return (
    <div
      className=" position-absolute  w-100 h-100 bg-black z-0"
      style={{ top: "0px", left: "0px", padding: "50px" }}
    >
      <ul className="">
        {navbar_List.map((items, _index) => {
          return (
            <li key={++_index} className=" list-unstyled p-2 " style={{}}>
              <Link
                className=" text-decoration-none text-white fw-bold"
                style={{ fontSize: "1.4rem" }}
                to={`/${items}`}
                onClick={func}
              >
                {items}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
