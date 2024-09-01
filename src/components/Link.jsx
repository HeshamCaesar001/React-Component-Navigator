import React from "react";
import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({ to, children, className,activeClassName }) {
  const { navigate , currentPath } = useNavigation();
  const classes = classNames("text-blue-500 ", className,currentPath===to &&activeClassName);
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  return (
    <div>
      <a href={to} onClick={handleClick} className={classes}>
        {children}
      </a>
    </div>
  );
}

export default Link;
