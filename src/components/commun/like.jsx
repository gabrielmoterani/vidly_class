import React, { Component } from 'react';


class Like extends Component {
    render() { 
        let classes = "fa fa-heart"
        if(this.props.liked !== true) classes +=  "-o";
        return (<i className={classes}></i>);
    }
}
 
export default Like;