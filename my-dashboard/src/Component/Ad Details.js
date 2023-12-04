import React, { useState } from 'react';
import {Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "./Ad Details.css";

const AdDetails = () => {
  // State to store form data
  const [heading01, setHeading01] = useState('');
  const [description01, setDescription01]=useState('');
  const [heading02,setHeading02]=useState('');
  const [websiteUrl,setWebsiteUrl]=useState('');
  const [businessName,setBusinessName]=useState('');
  const [buttonLabel,setButtonLabel]=useState('');

  // Handle input changes
  const handleInputChange1 = (event) => {
    setHeading01(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setHeading02(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setDescription01(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setBusinessName(event.target.value);
  };
  const handleInputChange5 = (event) => {
    setButtonLabel(event.target.value);
  };
  const handleInputChange6 = (event) => {
    setWebsiteUrl(event.target.value);
  };
  return (
      <form>
        <h3>Enter details to create Ad:</h3>
        <label>Heading 01:
          <input type="text" value={heading01} onChange={handleInputChange1} id="input1" />
        </label><br/>

        <label>
          Heading 02:
          <input type="text" value={heading02} onChange={handleInputChange2} id="input2" />
        </label><br/>

        <label>
          Description 01:
          <textarea value={description01} onChange={handleInputChange3} id="input3" />
        </label><br/><br/>

        <label>
          Business Name:
          <input type="text" value={businessName} onChange={handleInputChange4} id="input4" />
        </label><br/><br/>

        <label>
            Button Label:
          <select id="input5" value={buttonLabel} onChange={handleInputChange5}>
            <option value=""></option>
            <option value="circle">Circle</option>
            <option value="square">Square</option>
            <option value="hexagon">Hexagon</option>
          </select>
        </label><br/><br/>

        <label id="label6">
          Website URL:
          <input type="text" value={websiteUrl} onChange={handleInputChange6} id="input6" />
        </label><br/><br/><br/><br/>
         
        <Link to="/ad-submit"><Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        </Link>
      </form>
  );
};

export default AdDetails;
