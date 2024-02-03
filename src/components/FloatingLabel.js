import React from "react";
import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";
import { FaInfoCircle } from "react-icons/fa";

function FloatingLabel({ value, label, isCheck, placeholder, disable, valid, type }) {
  const style = {
    width: '657px',
    height: '68px',
    padding: '16px',
    borderRadius: '4px',
    border: isCheck ? valid ? '2px solid green' : '2px solid red' : '2px solid black',
    fontSize: '40px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    boxSizing: 'border-box',
    color: 'black',
    
  };

  const singStyle = {
    fontSize: '40px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
  };

  const mainStyle ={
    position:'relative',
    width:'max-content'
  }

  const buttonStyle={
    position:'absolute',
    right:'10px',
    bottom:'9px',
    fontSize:'50px',
    color:isCheck ? valid ? 'green' : 'red' : '',
  }

  return (
    <div style={mainStyle} >
      {label && label.length > 0 &&
        <label htmlFor={type} style={singStyle}>{label}</label>
      }
      <input
        style={style}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disable}
        name={type}
        id={type}
      />
      {isCheck && valid && <TiTick style={buttonStyle} />}
      {isCheck && !valid && <FaInfoCircle style={buttonStyle} />}

    </div>
  );
}

FloatingLabel.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
  valid: PropTypes.bool,
  isCheck: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
};

export default FloatingLabel;
