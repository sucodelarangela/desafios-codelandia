// assets
import heartVoid from '../assets/heart_void.svg';
import heartFill from '../assets/heart_fill.svg';
import { useState } from 'react';

const Home = ({ date, title, body }) => {
  const [like, setLike] = useState(false);

  const handleLike = (e) => {
    like ? setLike(false) : setLike(true);
  };

  return (
    <div className="card">
      <div className="card__header">
        <p>{date}</p>
        <button onClick={() => handleLike(like)}>
          {
            (like === false) ? <img src={heartVoid} alt="Curtir" role='button' /> : <img src={heartFill} alt="Curtido" role='button' />
          }
        </button>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Home;