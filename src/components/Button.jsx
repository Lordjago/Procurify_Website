import React  from "react";
const Button = ({
  label,
  className,
  onClick,
  isLoading,
  style,
  btnIcon,
  ...props
}) => {
  const handleOnClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const Icon = btnIcon;
  return (
    <button {...props} onClick={handleOnClick} className={className ? className : "m-20 py-4 px-6 text-xs text-center text-white bg-secondary rounded-lg font-normal cursor-pointer"}>
      {isLoading ? (
        <div className="login-spinner">
          <div className="spin"></div>
          <span className={style}>{label}</span>
        </div>
      ) : (
        <div className="flex items-center">
          {Icon && (
            <span style={{ marginRight: "6px" }}>
              <Icon size={17} color="#fff" />
            </span>
          )}
          <p className={style}>{label}</p>
        </div>
      )}
    </button>
  );
};

export default Button;
