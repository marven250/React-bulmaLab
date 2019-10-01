import React from "react"

class CoolButton extends React.Component{

        render(){

            let classes= "button"
            if(this.props.isSmall) classes += " is-small"
            if (this.props.isRounded) classes += " is-Rounded"
            if (this.props.isDanger) classes += " is-danger"
            if (this.props.isSuccess) classes += " is-success"


            return(

               <div>
                    <button style= {{margin: "15px"}} className= {classes}>Cool buttoner</button>
               </div> 
            )
        }


}


export default CoolButton