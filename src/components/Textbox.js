import React from "react"
const Textbox=(props)=>{
    return(
        <div className="component" >
             <input type="text" id={props.name} placeholder={props.name}/><br />
        </div>
    )
}
export default Textbox;