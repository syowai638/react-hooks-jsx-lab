import React from 'react';
// Import the image from the data file
import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Hello! My name is Caroline, and I am a web developer based in Nairobi.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
