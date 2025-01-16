// src/components/Home.js
import React from 'react';

const name = "Caroline";
const city = "Nairobi";

const Home = () => {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
};

export default Home;