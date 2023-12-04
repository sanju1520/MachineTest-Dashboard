import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Create Ad.css";

const CreateAd = () => {
  const [textAd, settextAd] = useState(false);
  const [mediaAd,setmediaAd]=useState(false);

  const handleChange = (event) => {
    settextAd(event.target.checked);
    setmediaAd(event.target.checked);
  }
   
  return (
    <div id="border">
      <h1>Create Ad</h1>
      <div id="ad">
        <input type="checkbox" name="textAd" onChange={handleChange}/>
        <label>
          <h2>Create Text Ad</h2>
          <div id="ad">
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2021/08/digital-ad-creative-copy-611104d63f167-sej-1-384x202.jpg" alt="text-ad"/>
          </div>
        </label>
        </div>

        <div id="ad">
        <input type="checkbox" name="mediaAd" onChange={handleChange}/>
        <label>
        <h2>Create Media Ad</h2>
        <div id="img">
            <img src="https://m.media-amazon.com/images/I/71JeOoJYvqL._AC_UF350,350_QL80_.jpg" alt="text-ad"/>
          </div>
        </label>
        </div>

        <br /><br /><br/>
        <Link to="/addetails"><button disabled={!textAd || !mediaAd}>Continue</button></Link>
    </div>
  );
};

export default CreateAd;
