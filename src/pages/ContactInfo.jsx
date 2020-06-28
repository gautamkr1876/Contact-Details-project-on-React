import React from "react";

class ContactInfo extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div className="contact-info">
            <span>{this.props.props.post.mobile}</span>
            <span>{this.props.props.post.email}</span>
            <span>{this.props.props.post.group}</span>
            <span>{this.props.props.post.country}</span>
            </div>
        )
        }
}

export default ContactInfo;