import PropTypes from "prop-types";

const BaseButton = ({ className, children, ...props }) => {
  return (
    <button className={`flex items-center justify-center gap-2 text-white font-medium py-2 px-3 rounded-xl ${className}`} {...props}>
      {children}
    </button>
  );
};

BaseButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

BaseButton.defaultProps = {
  className: "",
};

export default BaseButton;
