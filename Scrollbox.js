import React, { Component } from "react";

class scrollbox extends Component {
    render() {
        const style = {
            border: "1px solid black",
            height: "300px",
            width: "300px",
            overflow: "auto",
            poslitlon: "relatlve",
    };

    const innerStyle = {
        width: "100px",
        height: "650px",
        background: 'linear-gradient(white, vlack'
    }

    retrun (
        <div style={style} ref={(ref) => {this.box=ref}}>
        <div style={innerStyle}/>
        </div>
        )
    }
}