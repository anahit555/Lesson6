import React  from "react";

function FormComponent (props){
    return (
        <form onSubmit={props.handleSubmit}>
          <input type="text"
            value={props.data.firstName} 
            name="firstName" 
            placeholder="First name" 
            onChange={props.handleChange}
            />
            <br/>
            <br/>
          <input type="text" 
            value={props.data.lastName} 
            name="lastName" 
            placeholder="Last name" 
            onChange={props.handleChange}
            />
            <br/>
            <br/>
          <input type="text" 
            value={props.data.age} 
            name="Age" 
            placeholder="Age" 
            onChange={props.handleChange}
            />
            <br/>
            <br/>
          <textarea 
            value={"Some default value"} 
          />
          <br/>
                    
          <label>
            <input 
            type="checkbox" 
            name= "isFriendly"
            checked ={props.data.isFriendly}
            onChange = {props.handleChange}
            />IS Friendly
          </label>
          <br/>
          
          <label>
            <input 
            type="radio" 
            name= "gender"
            value="male"
            checked ={props.data.gender === "male"}
            onChange = {props.handleChange}
            />Male
          </label>
          <br/>
          <label>
            <input 
            type="radio" 
            name= "gender"
            value= "female"
            checked ={props.data.gender === "female"}
            onChange = {props.handleChange}
            />Female
          </label>
          <br/>
          <label>Favorite color</label>
          <select 
            value={props.data.favColor}
            onChange={props.handleChange}
            name="favColor"
          >
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="pink">pink</option>
          </select>
          <br/>
          <br />
          <select 
            value={props.data.destinations}
            onChange={props.handleChange}
            name="destinations"
          >
            <option value="">Please choose a destinations </option>
            <option value="Germany">Germany</option>
            <option value="Norway">Norway</option>
            <option value="North pole">North pole</option>
          </select>
          <br/>
  
          <h1>
            {props.data.firstName}
             {props.data.lastName}
          </h1>
          <h2>
            You are a {props.data.gender}
          </h2>
          <h2>
            My Favorite color is {props.data.favColor}
          </h2>
          <button>
            Submit
          </button>
          <br />
          <br />
          <hr />
          <h2>
            Entered information:
          </h2> 
          <p>
            Your name: 
            {props.data.firstName}
            {props.data.lastName}
          </p> 
          <p>
            Your age:
            {props.data.Age}
          </p> 
          <p>
            Your gender:
            {props.data.gender}
          </p> 
          <p>
            Your Favorite color:
            {props.data.favColor}
          </p> 
          <p>
            Your destinations:
            {props.data.destinations}
          </p> 
      </form> 
    )
};

export default FormComponent;