import React, {Component} from 'react';
import './App.css';


class App extends Component {
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
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
        value={this.state.firstName} 
        name="firstName" 
        placeholder="First name" 
        onChange={this.handleChange}/><br/> <br/>
        <input type="text" 
        value={this.state.lastName} 
        name="lastName" 
        placeholder="Last name" 
        onChange={this.handleChange}/><br/><br/>
        <input type="text" 
        value={this.state.age} 
        name="Age" 
        placeholder="Age" 
        onChange={this.handleChange}/><br/><br/>
        <textarea value={"Some default value"} /><br />
        
      <label>
          <input 
          type="checkbox" 
          name= "isFriendly"
          checked ={this.state.isFriendly}
          onChange = {this.handleChange}
          />IS Friendly
        </label><br />
        <label>
          <input 
          type="radio" 
          name= "gender"
          value="male"
          checked ={this.state.gender === "male"}
          onChange = {this.handleChange}
          />Male
        </label><br />
        <label>
          <input 
          type="radio" 
          name= "gender"
          value= "female"
          checked ={this.state.gender === "female"}
          onChange = {this.handleChange}
          />Female
        </label><br />
        <label>Favorite color</label>
        <select 
        value={this.state.favColor}
        onChange={this.handleChange}
        name="favColor"
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="pink">pink</option>
        </select><br /><br />
        <select 
        value={this.state.destinations}
        onChange={this.handleChange}
        name="destinations"
        >
          <option value="">Please choose a destinations </option>
          <option value="Germany">Germany</option>
          <option value="Norway">Norway</option>
          <option value="North pole">North pole</option>
        </select><br />

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>My Favorite color is {this.state.favColor}</h2>
        <button >Submit</button>
        <br />
        <br />
        <hr />
        <h2>Entered information:</h2> 
        <p>Your name: {this.state.firstName} {this.state.lastName}</p> 
        <p>Your age:{this.state.Age}</p> 
        <p>Your gender:{this.state.gender}</p> 
        <p>Your Favorite color:{this.state.favColor}</p> 
        <p>Your destinations:{this.state.destinations}</p> 
              
      </form> 
      
     
    )
  }
}

export default App;
