import React from 'react'
import ContactInfo from "../pages/ContactInfo.jsx"

class Post extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            clicked: false
          };
      
          this.handleClick = this.handleClick.bind(this);
       
    }
    handleClick() {
        console.log(this.props);
        this.setState({
          clicked: true
        });
      }
    render(){
        return(
        <button onClick={this.handleClick} value={this.props.post.name}>{this.props.post.name}{this.state.clicked ? <ContactInfo props={this.props}/> : null}
        </button>
        );
    }
}
export default Post;