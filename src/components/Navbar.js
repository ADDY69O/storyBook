import React from 'react';
import PropTypes from 'prop-types';
import { SiGooglemeet } from "react-icons/si";

function Navbar({ left, right, color, backgroundColor = 'red' }) {
  const navStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  const bacStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor,
    padding: '8px',
  };

  const elementStyle = {
    marginLeft: '8px',
    marginRight: '8px',
  };

  if (color) {
    bacStyle.color = color;
  }

  const renderElement = (item) => {
    const { label, type } = item;
    switch (type) {
      case 'text':
        return <span style={elementStyle} key={label}>{label}</span>;
      case 'button':
        return <button style={elementStyle} key={label}>{label}</button>;
      case 'link':
        return <a style={elementStyle} href="/">{label}</a>;
      case 'input':
        return <input style={elementStyle} key={label} placeholder={label} />;
      case 'dropdown':
        return <select style={elementStyle} key={label}><option>{label}</option></select>;
        case 'icon':
            const IconComponent = getIconComponent(label);
            return React.createElement(IconComponent, { style: elementStyle, key: label });
        default:
        return null;
    }
  };

  const getIconComponent = (label) => {
    switch (label) {
      case 'SiGooglemeet':
        return SiGooglemeet;
      // Add more cases for other icons if needed
      default:
        return null;
    }
  };


  return (
    <div style={bacStyle}>
      <div style={navStyle}>
        {left && left.map((item) => renderElement(item))}
      </div>
      <div style={navStyle}>
        {right && right.map((item) => renderElement(item))}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  left: PropTypes.array,
  right: PropTypes.array,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default Navbar;
