import PropTypes from "prop-types";
/**
 * The default button used across the app
 * Set the type to 'primary' for the default brand experience
 */
const Button = (props) => {
  const { type, disabled, children, onClick } = props;
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "destructive"]),
  disabled: PropTypes.bool,
  children: PropTypes.oneOf([PropTypes.node, PropTypes.element]),
  onClick: PropTypes.func,
};

export default Button;
