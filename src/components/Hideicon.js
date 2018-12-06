import React from "react";

export default () => (
	Object.keys(this.props.codeContent).map((key)=> (this.props.codeOnFocus==key?(<div onClick={() => {this.props.choose(key)}}>RETARD</div>):(<div>LEGOO</div>))))