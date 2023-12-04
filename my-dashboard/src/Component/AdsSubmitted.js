import React from 'react';
import "./AdsSubmitted.css";

const AdsSubmitted = () => {
  setTimeout(function() {
    window.location.href = '/createad';
}, 600);
  return (
    <div id="submit">
        <h1>Ad Submitted</h1>
        <h4>Thank you for submitting your ad! It will be reviewed and processed.</h4>
    </div>
  );
};

export default AdsSubmitted;
