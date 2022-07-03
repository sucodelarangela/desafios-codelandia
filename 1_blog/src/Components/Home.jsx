// assets
import heartVoid from '../assets/heart_void.svg';
import { useState } from 'react';

const Home = ({ date, title, body, like }) => {
  return (
    <div className="card">
      <div className="card__header">
        <p>{date}</p>
        <img src={heartVoid} alt="Curtir" role='button' />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Home;