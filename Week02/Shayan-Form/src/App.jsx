import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <form>
        <h2>Registration Form</h2>

        <label htmlFor="name">Enter Your Name: </label>
        <input type="text" name="Name" placeholder="Enter your name" /> <br />

        <label htmlFor="age">Enter Your Age: </label>
        <input type="number" name="Age" placeholder="Enter your age" /> <br />

        <label htmlFor="course">Select a Course: </label>
        <select name="course">
          <option value="">Select a Course</option>
          <option value="web-development">Web Development</option>
          <option value="app-development">App Development</option>
          <option value="android-development">Android Development</option>
          <option value="shopify-development">Shopify Development</option>
        </select>
        <br />

        <label>Enter Your Gender: </label>
        <input type="radio" name="Gender" value="male" /> <span>Male</span>
        <input type="radio" name="Gender" value="female" /><span>Female</span>
        <br />

        <fieldset>
          <legend>Enter You Address</legend>
          <textarea name="Address" cols="38" rows="6" placeholder="Enter your address"></textarea>
        </fieldset>
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
