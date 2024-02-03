import React from 'react';
import PropTypes from 'prop-types';
import '../components/Button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary,success,danger,warning,info,dark,light, backgroundColor, size, label, ...props }) => {
  const mode = primary ? light?'storybook-button--Primary-light':'storybook-button--primary' : success ? light?'storybook-button--success-light ':'storybook-button--success' : danger ?light?'storybook-button--danger-light': 'storybook-button--danger':info?light?'storybook-button--info-light':'storybook-button--info':warning?light?'storybook-button--warning-light':'storybook-button--warning':dark?light?'storybook-button--dark-light':'storybook-button--dark':'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  success: PropTypes.bool,
  danger:PropTypes.bool,
  warning:PropTypes.bool,
  info:PropTypes.bool,
  dark:PropTypes.bool,
  light:PropTypes.bool,

  
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
