import { PropTypes } from "prop-types"
import  '../components/Badge.css'

function Badge ({label1,label2,mode,color1="black",size}){
  
    

    const divStyle ={
        display:"flex",
        justifyContent: "flex-start",
        alignItems:"center",

    }

    const minStylesh={
        margin:'8px',
        color:`${color1}`
    }
    const minStylesp={
        margin:'8px',
        padding:'8px'
    }

  
    
    return(
        <div style={divStyle} >
            <h1  id={`text-${size}`}  style={minStylesh}>{label1}</h1>
            <p  id={`text-${size}`} className={` badge-${mode}`} style={minStylesp}>{label2}</p>
        </div>
    )

}

Badge.prototype ={
    label1:PropTypes.string,
    label2:PropTypes.string,
    mode:PropTypes.string,
  
    color1:PropTypes.string,
   
    size: PropTypes.oneOf(["xs","sm","base","md","lg","xl"]),
}


export default Badge