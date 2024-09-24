import React, { useState } from 'react';

export default function PostExample() {
  const [response, setResponse] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
  });

  // Function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Send the form data as JSON
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };



  // Function to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>POST Request Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response from server:</h3>
          <pre>{JSON.stringify(response, null, 4)}</pre>
        </div>
      )}
    </div>
  );
}
