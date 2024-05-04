import { useState } from 'react';
import './App.css';

function App() {

  const initialFormData = {
    first: "",
    last: ""
  }

  const [formData, setFormData] = useState(initialFormData);
  const [displayName, setDisplayName] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setDisplayName(true);
    console.log("Form submitted:", formData);
  }

  const { first, last } = formData;

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name
          <input type="text" id="first" name="first" required onChange={handleChange} value={first} />
        </label>
        <label htmlFor="last">Last Name
          <input type="text" id="last" name="last" required onChange={handleChange} value={last} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {displayName && <p>{`Full Name: ${first} ${last}`}</p>}
    </>
  )
}

export default App;
