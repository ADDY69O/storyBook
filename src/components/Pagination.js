    import React from "react";
    import PropTypes from "prop-types";


    function Pagination({ count, mode, backgroundColor, color,border,currentPage }) {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const singleStyle={
        padding:'4px  24px 4px 24px',
        border:`1px solid ${border}`,
        backgroundColor,
        color,
        left:'68px',  
        gap:'10px',
        fontSize:'80px',
        fontFamily: 'Inter, sans-serif', 
        fontWeight: '400',        
    }

    const currentStyle={
        padding:'4px  24px 4px 24px',
        border:`1px solid ${border}`,
        backgroundColor:`${color}`,
        color:`${backgroundColor}`,
        left:'68px',  
        gap:'10px',
        fontSize:'80px',
        fontFamily: 'Inter, sans-serif', 
        fontWeight: '400',  
    }
   

    const handleInc = ()=>{
        currentPage = currentPage + 1;
    }   
    const handleDec = ()=>{
        currentPage = currentPage - 1;

    }

    const pages =[];

    for(let i=0;i<=count+1;i++){
        if(i==0 && mode == 'primary' ){
            pages.push(<p style={singleStyle} onClick={()=>handleDec()} >{"<<"}</p>)
        }
        if(i==0 && mode == 'simple' ){
            continue;
        }
        if(i==count+1 && mode == 'simple' ){
            continue;
        }
        else if(i==0 && mode == 'secondary'){
            pages.push(<p style={singleStyle} onClick={()=>handleDec()} >{"Previous"}</p>)
        }
        else if(i==count+1 && mode == 'secondary'){
            pages.push(<p style={singleStyle} onClick={()=>handleInc()}>{"Next"}</p>)
        }
        else if(i==count+1 && mode == 'primary'){
            pages.push(<p style={singleStyle} onClick={()=>handleInc()}>{">>"}</p>)
        }
        else if(i==currentPage){
            pages.push(<p style={currentStyle}  >{i }</p>)

        }
        else{
            pages.push(<p style={singleStyle}  >{i }</p>)

        }
    }

   
    return (
        <div style={style}>
   
        {pages}
       
        </div>
    );
    }

    Pagination.propTypes = {
    count: PropTypes.number,
    mode: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    currentPage:PropTypes.number
    };

    export default Pagination;
