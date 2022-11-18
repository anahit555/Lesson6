import React from 'react';

function FormItemWrapper(props) {
  <div style={{ marginBottom: '1rem' }}>
    {props.children}
  </div>
}

function FormComponent(props) {
  const {
    data,
    handleChange,
    handleSubmit,
    handleCheckedChange,
  } = props;

  const { firstName: dataFirstName, lastName } = data;
  const firstName = `${dataFirstName} user`;
  const userFullName = `${data.firstName} ${data.lastName}`;

  return (
    <form onSubmit={handleSubmit}>
      <FormItemWrapper>
        <input type="text"
          value={firstName}
          name="firstName"
          placeholder="First name"
          onChange={handleChange}
        />
      </FormItemWrapper>

      <input type="text"
        value={lastName}
        name="lastName"
        placeholder="Last name"
        onChange={handleChange}
      />
      <br />
      <br />
      <input type="text"
        value={data.age}
        name="age"
        placeholder="Age"
        onChange={handleChange}
      />
      <br />
      <br />
      <textarea
        defaultValue={"Some default value"}
      />
      <br />

      <label>
        <input
          type="checkbox"
          name="isFriendly"
          checked={data.isFriendly}
          onChange={handleCheckedChange}
        />IS Friendly
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={data.gender === "male"}
          onChange={handleCheckedChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={data.gender === "female"}
          onChange={handleCheckedChange}
        />
        Female
      </label>
      <br />
      <label>Favorite color</label>
      <FormItemWrapper>
        <select
          value={data.favColor}
          onChange={handleChange}
          name="favColor"
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="pink">pink</option>
        </select>
      </FormItemWrapper>

      <select
        value={data.destinations}
        onChange={handleChange}
        name="destinations"
      >
        <option value="">Please choose a destinations </option>
        <option value="Germany">Germany</option>
        <option value="Norway">Norway</option>
        <option value="North pole">North pole</option>
      </select>
      <br />

      <h1>
        {userFullName}
      </h1>
      <h2>
        You are a {data.gender}
      </h2>
      <h2>
        My Favorite color is {data.favColor}
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
        {data.firstName}
        {data.lastName}
      </p>
      <p>
        Your age:
        {data.age}
      </p>
      <p>
        Your gender:
        {data.gender}
      </p>
      <p>
        Your Favorite color:
        {data.favColor}
      </p>
      <p>
        Your destinations:
        {data.destinations}
      </p>
    </form>
  )
};

export default FormComponent;