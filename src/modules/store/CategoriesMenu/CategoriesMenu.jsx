import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function CategoriesMenu({ menuItems }) {
  return (
    <>
      {/* Top menu para modo desktop */}
      <ul
        className={`hidden rounded-box 
                      mt-4 sm:menu sm:menu-horizontal sm:menu-normal sm:mt-0`}
      >
        <MenuItems items={menuItems} />
      </ul>

      {/* Menú desplegable fijo para mobile, position:fixed */}
      <div className="fixed z-50 dropdown dropdown-top bottom-4 left-4">
        <label
          tabIndex={0}
          className={`m-1 btn btn-md btn-primary
                      sm:hidden`}
        >
          Categorías
        </label>
        <ul
          tabIndex={0}
          className="w-48 p-2 shadow dropdown-content menu bg-base-100 rounded-box"
        >
          <MenuItems items={menuItems} />
        </ul>
      </div>
    </>
  );
}

function MenuItems({ items }) {
  return (
    <>
      <li>
        <NavLink to="/store">Todos</NavLink>
        {/* Hardcodeado Link a '/' en las categorías. TODO: agregar categoria 'all' */}
      </li>
      {items.map((item, index) => (
        <li key={`categories-menu-${index}`}>
          <NavLink to={`/category/${item}`}>{item}</NavLink>
        </li>
      ))}
    </>
  );
}

/* menu menu-vertical rounded-box mt-4 menu-compact */
export default CategoriesMenu;
