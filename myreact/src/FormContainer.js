import React, {Component} from "react";
import FormComponent  from "./FormComponent";


class Form extends Component {
    constructor(){
      super()
      this.state ={
        firstName:"",
        lastName: "",
        Age:"",
        destinations:"",
        isFriendly:false,
        gender:"",
        favColor:"red"
  
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange (event){
      const {name, value, type, checked} = event.target
      type ==="checkbox" ?
       this.setState({[name]:checked}) : this.setState ({[name]:value
        // firstName: event.target.value,
        // lastName: event.target.value
  
        // [event.target.name]:event.target.value
  
      })
    }
  
    render(){
      return(<FormComponent 
        handleChange={this.handleChange}
        data={this.state} />)
      
    }
  }

export default Form