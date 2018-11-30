import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/app">
        <button>Notes</button>
      </Link>
    </div>
  )
}

export default Home;
