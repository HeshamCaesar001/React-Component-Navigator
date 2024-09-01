import React from "react";
import className from "classnames";
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
    const classes = className(rest.className,'flex item-center px-3  py-1.5 border',{
        'bg-blue-500 border-blue-500 text-white':primary,
        'bg-gray-900 border-gray-900 text-white':secondary,
        'bg-green-500 border-green-500 text-white':success,
        'bg-yellow-400 border-yellow-400 text-white':warning,
        'bg-red-500 border-red-500 text-white':danger,
        'rounded-full':rounded,
        'bg-white':outline,
        'text-blue-900':outline && primary,
        'text-green-900':outline && success,
        'text-yellow-600':outline && warning,
        'text-red-600':outline && danger,
        'text-gray-600':outline && secondary
    }) 
    // console.log(rest);
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "only one property(primary-secondary-warning-danger-success) can be true"
      );
    }
  },
};

export default Button;
