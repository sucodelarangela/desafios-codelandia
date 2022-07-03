// assets
import heartVoid from '../assets/heart_void.svg';
import heartFill from '../assets/heart_fill.svg';

// hooks
import { useState } from 'react';

const Home = ({ date, title, body }) => {
  // states para controlar os likes
  const [like, setLike] = useState(false);

  // alternando a condição do like
  // toggling likes condition
  const handleLike = (e) => {
    like ? setLike(false) : setLike(true);
  };

  return (
    <div className="card">
      <div className="card__header">
        <p>{date}</p>
        <button onClick={() => handleLike(like)}>
          {
            // se o post não for curtido, retorna o coração vazio; se curtido, retorna o coração preenchido
            // if blog is liked returns void heart icon; if not, returns the filled heart icon
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