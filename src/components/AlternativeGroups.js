import React from "react";
import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";
import { FaInfoCircle } from "react-icons/fa";
import { CiAt } from "react-icons/ci";

function AlternativeGroups({ value, placeholder,mode }) {
  const style = {
    width: '657px',
    height: '68px',
    padding: '16px',
    borderRadius: '4px',
    border: mode == 'valid-2' || mode == 'valid-1'? '2px solid green' : mode== 'invalid-2' || mode=='invalid-1' ?'2px solid red' : '2px solid black',
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
    right: mode =='tag-1'? '580px' :'10px',
    bottom:'9px',
    fontSize:'50px',
    color: mode=='valid-2' ? 'green' : mode=='invalid-2' ? 'red' : 'gray',
  }

  return (
    <div style={mainStyle} >
     
      <input
        style={style}
        type="text"
        value={value}
        placeholder={`${mode=='tag-1'? `       ${placeholder}` :placeholder}`}
      />
      {mode == 'valid-1' || mode=='valid-2' && <TiTick style={buttonStyle} />}
      {mode == 'invalid-1' || mode=='invalid-2' && <FaInfoCircle style={buttonStyle} />}
      {(mode == 'tag-2' || mode=='tag-1')  && <CiAt style={buttonStyle} />}

    </div>
  );
}

AlternativeGroups.propTypes = {
  mode: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default AlternativeGroups;
