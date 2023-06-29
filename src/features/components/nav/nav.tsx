import { Link } from "react-router-dom";
import { NavOptions } from "../../types/nav.options";
import style from "./nav.module.css";

type Propstype = {
  options: NavOptions[];
}

export function Nav({ options }: Propstype) {
  return (
    <>
      <div className={style.navContainer}>
        <nav>
          <ul>
            {options.map((item) => (
              <li key={item.label}>
                <Link to={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}