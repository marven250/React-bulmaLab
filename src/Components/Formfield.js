import React from "react";

class Formfield extends React.Component{

        render(){
            return(
                <div className="field form-field">
                    <label className="label">{this.props.labeler}</label>
                    <div className="control">
                        <input className="input" type={this.props.typer} placeholder= {this.props.placeHolderer} />
                    </div>
                </div>
            )
        }

}



export default Formfield;